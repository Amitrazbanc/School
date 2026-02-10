
export enum UserRole {
  ADMIN = 'ADMIN',
  TEACHER = 'TEACHER',
  STUDENT = 'STUDENT'
}

export interface User {
  id: string;
  email: string;
  role: UserRole;
  name: string;
}

export interface Notice {
  id: string;
  title: string;
  content: string;
  date: string;
  category: 'URGENT' | 'GENERAL' | 'ACADEMIC';
}

export interface Event {
  id: string;
  title: string;
  description: string;
  date: string;
  location: string;
  imageUrl?: string;
}

export interface Teacher {
  id: string;
  name: string;
  subject: string;
  qualification: string;
  image: string;
  bio: string;
}

export interface AdmissionApplication {
  id: string;
  studentName: string;
  grade: string;
  parentName: string;
  contact: string;
  status: 'PENDING' | 'APPROVED' | 'REJECTED';
  submissionDate: string;
}

export interface GalleryItem {
  id: string;
  url: string;
  caption: string;
  type: 'IMAGE' | 'VIDEO';
}
