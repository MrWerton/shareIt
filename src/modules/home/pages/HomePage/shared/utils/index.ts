export function getHashtags(text: string) {
    
    const regex = /#\w+/g;
    
    
    const hashtags = text.match(regex);
    
    
    return hashtags ? hashtags : [];
  }
  