import { Post } from "./post";

export interface PostsResponse {
  posts: Post[];
  page: number;
  totalCount: number;
  totalPages: number;
}