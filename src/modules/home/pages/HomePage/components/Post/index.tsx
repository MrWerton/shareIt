import { doc, increment, updateDoc } from 'firebase/firestore';
import { useAuth } from '../../../../../../shared/context/auth_context';
import { db } from '../../../../../../shared/services/firebase_config';
import { Post as IPost } from '../../shared/interfaces/Post';
import { getTimeSincePublication } from '../../shared/utils';
import { Menu } from '../Menu';
import { BodyPost, Container, Content, Counter, Description, Down, Footer, HeaderPost, Profile, ProfileLocalization, ProfileName, Tag, TimerPublication, Up, VoteOption } from './styles';
interface PostProps{
    post: IPost
}
export const Post = ({post}: PostProps) => {
    const {user} = useAuth()

    const handleUpVote=async()=>{
        try {
            const ref = doc(db, 'posts', post.id!);
            await updateDoc(ref, {votes: increment(1)})
        } catch (error) {
            console.log(error)
        }
    }
    const handleDownVote=async()=>{
        try {
            const ref = doc(db, 'posts', post.id!);
            await updateDoc(ref, {votes: increment(-1)})
        } catch (error) {
            console.log(error)
        }
    }
  

    const iAmAuthor = post.author.id === user!.id;
    const isLocked = iAmAuthor || post.closed || !post.active
    return (
        <Container>
              <VoteOption>
                    <Up disabled={isLocked} onClick={handleUpVote}>^</Up>
                    <Counter votes={post.votes}>{post.votes}</Counter>
                    <Down disabled={isLocked} onClick={handleDownVote}>v</Down>
                </VoteOption>
            <Content>
                <HeaderPost>
                    <Profile>
                        <ProfileName>{post.author.name}   
                        <Menu post={post}/>
                        </ProfileName>
                        <ProfileLocalization>Shared from {post.author.address.city} - {post.author.address.country}</ProfileLocalization>
                    </Profile>
                    <TimerPublication>{getTimeSincePublication(post.createdAt.seconds)}</TimerPublication>
                </HeaderPost>
                <BodyPost isInactive={!post.active && !iAmAuthor}>
                    <Description >{post.content}</Description>
                   <Footer>
                    <span>
                        {post.tags.map(item=><Tag key={item}>{item} </Tag>)}
                    </span>
                      
                   </Footer>
                </BodyPost>
             </Content>
              
           
        </Container>
    )
}


