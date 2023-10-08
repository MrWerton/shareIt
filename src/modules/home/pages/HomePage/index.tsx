import { usePost } from '../../../../shared/contexts/PostContext'
import { AddPostForm } from './components/AddPostForm'
import { ListPosts } from './components/ListPosts'
import { Container } from "./styles"

export const HomePage = () => {
  const { addPost, downVote, posts,upVote} = usePost()

  return (
    <Container>
      <AddPostForm onAdd={addPost}/>
      <ListPosts handleDownVote={downVote} handleUpVote={upVote} posts={posts} />
    </Container>
  )
}
