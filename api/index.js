// api/index.js
import express from 'express';
import cors from 'cors';
import authRoutes from './routes/auth.js';

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/auth', authRoutes); // Hook up auth routes

app.get('/', (req, res) => {
  res.json({ message: 'TruckMe API is running!' });
});

export default app;