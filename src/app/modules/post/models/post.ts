export interface Post {
  id: number;
  authorName: string;
  title: string;
  content: string;
  commentCount: number;
  images: string[];
  likes: string[];
  tags: string[];
  createdAt: string | Date;
  updatedAt: string | Date;
}
