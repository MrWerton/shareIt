import { BodyPost, Container, Content, Counter, Description, Down, HeaderPost, Profile, ProfileLocalization, ProfileName, Title, Up, VoteOption } from './styles';

export const Post = () => {
    return (
        <Container>
            <Content>
                <HeaderPost>
                    <Profile>
                        <ProfileName>Werton</ProfileName>
                    <ProfileLocalization>Teresina-PI</ProfileLocalization>
                    </Profile>
                </HeaderPost>
                <BodyPost>
                    <Title>Hello</Title>
                <Description>Lorem Ipson Indolor</Description>
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

