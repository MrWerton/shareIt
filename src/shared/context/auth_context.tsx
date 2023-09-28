import { GoogleAuthProvider, getAuth, signInWithPopup } from 'firebase/auth';
import { ReactNode, createContext, useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth } from '../services/firebase_config';

interface User {
  name: string;
  id: string;
}

interface IProps {
  loginGoogle: () => Promise<void>;
  signOut: () => Promise<void>;
  user: User | null | undefined;
  token: string | null;
}

interface AuthContextProviderProps {
  children: ReactNode;
}

const AuthContext = createContext<IProps | undefined>(undefined);

function AuthProvider(props: AuthContextProviderProps) {
  const navigate = useNavigate();
  const [user, setUser] = useState<User | null | undefined>(undefined);
  const [token, setToken] = useState<string | null>(null);

  const loginGoogle = async () => {
    const provider = new GoogleAuthProvider();
    try {
      const response = await signInWithPopup(getAuth(), provider);
      const { photoURL, uid, displayName, refreshToken } = response.user;

      if (displayName && photoURL) {
        setUser({
          name: displayName,
          id: uid,
        });
        localStorage.setItem('@share_it:token', refreshToken);
      } else {
        window.alert('Seu perfil deve possuir foto e nome');
      }
      navigate('/home');
    } catch (err) {
      console.log(err);
    }
  }

  const signOut = async () => {
    try {
      await auth.signOut()
      localStorage.removeItem('@share_it:token');
      setUser(null);
      setToken(null)
      navigate('/');
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    const tokenA = localStorage.getItem('@share_it:token');
    setToken(tokenA);

    const unsubscribe = getAuth().onAuthStateChanged((authUser) => {
      if (authUser) {
        const { displayName, uid } = authUser;
        if (!displayName ) {
          throw new Error('Your profile not has a name.');
        }
        setUser({
          name: displayName,
          id: uid,
        });
      }else{
        setUser(null)
        setToken(null)
      }
    });

    return () => {
      unsubscribe();
    }
  }, []);

  return (
    <AuthContext.Provider
      value={{
        signOut,
        token,
        user,
        loginGoogle,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}

export { AuthProvider };

