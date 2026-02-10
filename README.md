
# Shree Saraswati Secondary School Portal

A professional-grade, secure, and scalable school management platform for Shree Saraswati Secondary School, Satyawati-06.

## Tech Stack
- **Frontend**: React 18, Tailwind CSS, Lucide Icons, React Router.
- **Backend**: Node.js, Express.js (Restful API).
- **Database**: PostgreSQL (via Supabase).
- **Authentication**: JWT & Bcrypt password hashing.

## Features
- **Public Portal**: Home, About, Academics, Admissions, Faculty, Gallery, News.
- **Online Admissions**: Digital application process with status tracking.
- **Admin Panel**: Complete CRUD for Notices, Events, Staff, and Admissions.
- **Responsive Design**: Optimized for mobile, tablet, and desktop.
- **SEO & Accessibility**: Semantic HTML and ARIA labels.

## Setup Instructions

### Frontend Setup
1. Clone the repository.
2. Install dependencies: `npm install`
3. Start dev server: `npm run dev`

### Backend Setup
1. Navigate to `/backend`.
2. Install dependencies: `npm install`
3. Configure `.env` with your Supabase credentials:
   ```
   DB_URL=postgresql://postgres:[PASSWORD]@db.mbdhyyjdrmnelhhynnsp.supabase.co:5432/postgres
   JWT_SECRET=your_jwt_secret
   PORT=5000
   ```
4. Start backend: `node server.ts`

### Database Setup
1. Use the provided `backend/schema.sql` to initialize your Supabase/PostgreSQL database.
2. Ensure RLS (Row Level Security) is configured for admin tables.

## API Documentation
- `POST /api/auth/login`: Admin authentication.
- `GET /api/notices`: Fetch all published notices.
- `POST /api/admissions`: Submit new student application.
- `GET /api/admin/admissions`: [PROTECTED] View all applications.
- `POST /api/admin/notices`: [PROTECTED] Create new notice.

## Admin Credentials (Demo)
- **Email**: `admin@saraswati.edu.np`
- **Password**: `admin123`

---
Developed with excellence for Shree Saraswati Secondary School.
