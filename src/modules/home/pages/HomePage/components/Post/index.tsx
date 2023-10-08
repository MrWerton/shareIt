import { usePost } from '../../../../../../shared/contexts/PostContext';
import { Post as IPost } from '../../../../interfaces/Post';
import { BodyPost, Container, Content, Counter, Description, Down, Footer, HeaderPost, Profile, ProfileLocalization, ProfileName, Tag, Up, VoteOption } from './styles';
interface PostProps{
    post: IPost
 
}
export const Post = ({post}: PostProps) => {
    const {downVote, upVote} = usePost()


    const isLocked =  post.closed || !post.active
    return (
        <Container>
              <VoteOption>
                    <Up disabled={isLocked} onClick={()=>downVote(post.id)}>^</Up>
                    <Counter votes={post.votes}>{post.votes}</Counter>
                    <Down disabled={isLocked} onClick={()=>upVote(post.id)}>v</Down>
                </VoteOption>
            <Content>
                <HeaderPost>
                    <Profile>
                        <ProfileName>{post.author.name}   
                       
                        </ProfileName>
                        <ProfileLocalization>Shared from {post.author.city}</ProfileLocalization>
                    </Profile>
                </HeaderPost>
                <BodyPost isInactive={!post.active}>
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


