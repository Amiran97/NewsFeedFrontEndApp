export interface Comment {
    id: number;
    postId: number;
    authorName: string;
    message: string
    createAt: string | Date;
    likes: string[];
}