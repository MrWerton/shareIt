import { AxiosError, AxiosInstance } from 'axios';
import { Post } from '../home/interfaces/Post';

export class ApiService  {

  constructor(  private _client: AxiosInstance){} 

    async getAll(): Promise<Post[]>{
            const response = await this._client.get('/posts');
    
            return response.data;
        }

        async post(data: Post): Promise<void>{
                 await this._client.post('/posts', data);
            }

            async upVote(id: string): Promise<void>{
                const url = `/posts/${id}`
                const post = await this._client.get(url)

                if(post.data != null){
                    await this._client.put(url, {
                        ...post.data,
                        votes: post.data.votes + 1,
                    });
                }else{
                    throw new AxiosError( 'Post not founded')
                }
           }
           
           async downVote(id: string): Promise<void>{
            const url = `/posts/${id}`
            const post = await this._client.get(url)

            if(post.data != null){
                await this._client.put(url, {
                    ...post.data,
                    votes: post.data.votes - 1,
                });
            }else{
                throw new AxiosError( 'Post not founded')
            }
       }
 }
 

