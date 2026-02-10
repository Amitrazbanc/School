
/**
 * BACKEND ARCHITECTURE (Node.js/Express)
 * This is a representative implementation of the RESTful API logic.
 */

import express, { Request, Response, NextFunction } from 'express';
import cors from 'cors';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
// In real setup, you'd use pg or @supabase/supabase-js
// import { createClient } from '@supabase/supabase-js';

const app = express();
const PORT = process.env.PORT || 5000;
const JWT_SECRET = process.env.JWT_SECRET || 'super_secret_key_123';

app.use(cors());
app.use(express.json());

// --- AUTH MIDDLEWARE ---
const authenticateToken = (req: any, res: Response, next: NextFunction) => {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];

    if (!token) return res.status(401).json({ error: 'Unauthorized' });

    jwt.verify(token, JWT_SECRET, (err: any, user: any) => {
        if (err) return res.status(403).json({ error: 'Token invalid' });
        req.user = user;
        next();
    });
};

const authorizeRole = (role: string) => (req: any, res: Response, next: NextFunction) => {
    if (req.user.role !== role) return res.status(403).json({ error: 'Forbidden' });
    next();
};

// --- ROUTES ---

// 1. Auth Login
app.post('/api/auth/login', async (req, res) => {
    const { email, password } = req.body;
    // Database check here
    // const user = await db.users.findUnique({ where: { email } });
    
    // Mock successful login
    if (email === 'admin@saraswati.edu.np' && password === 'admin123') {
        const token = jwt.sign({ id: '1', role: 'ADMIN', name: 'Admin User' }, JWT_SECRET);
        return res.json({ token, user: { name: 'Admin User', role: 'ADMIN', email } });
    }
    res.status(401).json({ error: 'Invalid credentials' });
});

// 2. Public - Notices
app.get('/api/notices', async (req, res) => {
    // const notices = await db.notices.findMany({ where: { is_published: true } });
    res.json([{ id: 1, title: 'Sample Notice', date: new Date() }]);
});

// 3. Public - Admission Submission
app.post('/api/admissions', async (req, res) => {
    try {
        const application = req.body;
        // await db.admissions.create({ data: application });
        res.status(201).json({ message: 'Application submitted successfully' });
    } catch (error) {
        res.status(500).json({ error: 'Failed to submit' });
    }
});

// 4. Admin - Manage Notices (CRUD)
app.post('/api/admin/notices', authenticateToken, authorizeRole('ADMIN'), async (req, res) => {
    // Logic to create notice
    res.json({ success: true });
});

// 5. Admin - View Admissions
app.get('/api/admin/admissions', authenticateToken, authorizeRole('ADMIN'), async (req, res) => {
    // const list = await db.admissions.findMany();
    res.json([]);
});

// Error handling middleware
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});

app.listen(PORT, () => console.log(`Backend running on port ${PORT}`));
