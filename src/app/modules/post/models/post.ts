export interface Post {
  nickname: string;
  title: string;
  postContent: string;
  postImg?: string | File;
  countComments: number;
  likes: number;
  rating: number;
  createDate: string | Date;
}
