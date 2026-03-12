export interface Course {
  id: string;
  title: string;
  description: string;
  instructor: string;
  duration: number;
  price: number;
  image?: string;
  category: string;
  level: 'beginner' | 'intermediate' | 'advanced';
  createdAt: Date;
  updatedAt: Date;
}

export interface CourseCategory {
  id: string;
  name: string;
  description?: string;
  icon?: string;
}
