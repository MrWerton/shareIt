import { ReactNode } from 'react'
import { Navigate } from 'react-router-dom'
import { Loading } from '../components/Loading'
import { useAuth } from '../context/auth_context'

interface IProps {
  children: ReactNode
}

export const PrivateRouter = ({ children }: IProps) => {
  const { user } = useAuth()


  console.log(user);
  if (user === undefined) {
    return (
     <Loading/>
        
    )
  }

  return user ? children : <Navigate to='/' replace/>
}

export const PublicRouter = ({ children }: IProps) => {
  const { user } = useAuth()

  if (user === undefined) {
    return (
      <Loading/>
    )
  }

  return !user ? children : <Navigate to='/home' replace/>
}