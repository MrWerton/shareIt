import { User } from "./User"

export interface Post{
    content: string,
    tags: string[],
    id?: string,
    active: boolean,
    author: User
    createdAt: Date
    
  }