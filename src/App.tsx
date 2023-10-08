import { HomePage } from './modules/home/pages/HomePage'
import { PostContextProvider } from './shared/contexts/PostContext'
function App() {
  return (
    <PostContextProvider>
        <HomePage/>
    </PostContextProvider>
  )
}

export default App
