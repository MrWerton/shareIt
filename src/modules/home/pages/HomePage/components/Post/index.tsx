import { BodyPost, Container, Content, Counter, Description, Down, HeaderPost, Profile, ProfileLocalization, ProfileName, Tag, Up, VoteOption } from './styles';

export const Post = () => {
    return (
        <Container>
            <Content>
                <HeaderPost>
                    <Profile>
                        <ProfileName>Werton</ProfileName>
                        <ProfileLocalization>ShareIted from Teresina-PI</ProfileLocalization>
                    </Profile>
                </HeaderPost>
                <BodyPost>
                    <Description>Lorem Ipson Indolor</Description>
                    <Tag>#Hello #Hello </Tag>
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

