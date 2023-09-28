import { collection, getDocs } from 'firebase/firestore'
import { useEffect } from 'react'
import {
  RouterProvider
} from "react-router-dom"
import './App.css'
import { routes } from './shared/routes'
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
    <RouterProvider router={routes} />
  )
}

export default App
