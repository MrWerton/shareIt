import { useState } from 'react';
import { Feed } from '../Feed';
import { MyPosts } from '../MyPosts';
import { Container, Content, Tab, Tabs } from './styles';

export const Section = () => {
  const [showFeed, setShowFeed] = useState(true)

  const handleShowFeed = () => setShowFeed(true)
  const handleShowMyPosts = () => setShowFeed(false)

  return (
    <Container>
      <Tabs>
        <Tab onClick={handleShowFeed} isActive={showFeed}>Feed</Tab>
        <Tab onClick={handleShowMyPosts} isActive={!showFeed}>My Posts</Tab>
      </Tabs>
       
          {showFeed ? (
            <Content
              key="feed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <Feed />
            </Content>
          ) : (
            <Content
              key="myPosts"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <MyPosts />
            </Content>
          )}
        
    </Container>
  )
}
