export interface Post {
  id: string;
  title: string;
  content: string;
  author: string;
  authorId: string;
  createdAt: Date;
  updatedAt: Date;
  likes?: number;
  comments?: number;
  image?: string;
}

export interface Comment {
  id: string;
  postId: string;
  authorId: string;
  author: string;
  content: string;
  createdAt: Date;
  updatedAt: Date;
}
