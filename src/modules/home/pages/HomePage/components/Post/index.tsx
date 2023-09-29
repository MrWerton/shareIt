import { Post as IPost } from '../../shared/interfaces/Post';
import { BodyPost, Container, Content, Counter, Description, Down, HeaderPost, Profile, ProfileLocalization, ProfileName, Tag, Up, VoteOption } from './styles';
interface PostProps{
    post: IPost
}
export const Post = ({post}: PostProps) => {
    return (
        <Container>
            <Content>
                <HeaderPost>
                    <Profile>
                        <ProfileName>{post.author.name}</ProfileName>
                        <ProfileLocalization>ShareIted from {post.author.address.city} - {post.author.address.country}</ProfileLocalization>
                    </Profile>
                </HeaderPost>
                <BodyPost>
                    <Description>{post.content}</Description>
                    {post.tags.map(item=><Tag key={item}>{item} </Tag>)}
                </BodyPost>
             </Content>
                <VoteOption>
                    <Up>^</Up>
                    <Counter>0</Counter>
                    <Down>v</Down>
                </VoteOption>
           
        </Container>
    )
}

