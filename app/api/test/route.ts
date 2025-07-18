import type { NextApiRequest, NextApiResponse } from 'next';
import { connectToDatabase } from '@/lib/mongodb';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const db = await connectToDatabase();
    // Use db.collection or mongoose models here

    res.status(200).json({ message: 'Connected to DB successfully!' });
  } catch (error) {
    res.status(500).json({ message: 'Database connection failed.', error });
  }
}
