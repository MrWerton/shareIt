import { collection, getDocs } from 'firebase/firestore'
import { useEffect } from 'react'
import {
  BrowserRouter
} from "react-router-dom"
import { ToastContainer } from 'react-toastify'
import { AuthProvider } from './shared/context/auth_context'
import { AppRoutes } from './shared/routes'
import { db } from './shared/services/firebase_config'
function App() {


  const getPosts = async () => {
    const response = await getDocs(collection(db, '/posts'));

    const data = response.docs;

    data.forEach(item => { console.log(item.data()) })
  }
  useEffect(() => {
    getPosts();
  }, [])

  return (
    <BrowserRouter>
    <AuthProvider>
      <AppRoutes/>
    </AuthProvider>
    <ToastContainer />
    </BrowserRouter>
  )
}

export default App
