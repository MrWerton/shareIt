import { User } from "./User"

export interface Post{
    content: string,
    tags: string[],
    id: string,
    active: boolean,
    author: User,
    closed: boolean,
    votes: number,
    createdAt: Date
    
  }