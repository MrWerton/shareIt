import { ReactNode } from 'react'
import { Navigate } from 'react-router-dom'
import { Loading } from '../components/Loading'

interface IProps {
  children: ReactNode
}

export const PrivateRouter = ({ children }: IProps) => {
  const token = localStorage.getItem('@share_it:token')

  if (token === undefined) {
    return (
     <Loading/>
        
    )
  }

  return token ? children : <Navigate to='/' replace/>
}

export const PublicRouter = ({ children }: IProps) => {
  const token = localStorage.getItem('@share_it:token')

  if (token === undefined) {
    return (
      <Loading/>
    )
  }

  return !token ? children : <Navigate to='/home' replace/>
}