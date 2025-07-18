<<<<<<< HEAD
import mongoose, { Connection } from 'mongoose';
=======
import mongoose, { Connection } from "mongoose";
>>>>>>> 7a022f0585164625d516a8f94331b42d826b9459

const MONGODB_URI = process.env.MONGODB_URI!;

if (!MONGODB_URI) {
<<<<<<< HEAD
  throw new Error('Please define the MONGODB_URI environment variable');
}

// Setup global cache
=======
  throw new Error("Please define MONGODB_URI in your environment variables.");
}

// Define a global interface to extend NodeJS.Global
interface MongooseGlobal {
  conn: Connection | null;
  promise: Promise<Connection> | null;
}

// Extend the global object in Node.js with a mongoose property
declare global {
  var mongoose: MongooseGlobal | undefined;
}

// Use the global object to cache the connection,
>>>>>>> 7a022f0585164625d516a8f94331b42d826b9459
let cached = global.mongoose;

if (!cached) {
  cached = global.mongoose = { conn: null, promise: null };
}

export async function connectToDatabase(): Promise<Connection> {
<<<<<<< HEAD
  if (cached.conn) return cached.conn;

  if (!cached.promise) {
    cached.promise = mongoose.connect(MONGODB_URI).then((mongoose) => mongoose.connection);
=======
  if (cached.conn) {
    return cached.conn;
  }

  if (!cached.promise) {
    const opts = {
      bufferCommands: true,
      maxPoolSize: 10,
    };

    cached.promise = mongoose.connect(MONGODB_URI, opts).then((mongooseInstance) => mongooseInstance.connection);
  }

  try {
    cached.conn = await cached.promise;
  } catch (error) {
    cached.promise = null;
    throw error;
>>>>>>> 7a022f0585164625d516a8f94331b42d826b9459
  }

  cached.conn = await cached.promise;
  return cached.conn;
}
<<<<<<< HEAD

export async function disconnectFromDatabase(): Promise<void> {
  if (cached.conn) {
    await cached.conn.close();
    cached.conn = null;
  }
}
=======
>>>>>>> 7a022f0585164625d516a8f94331b42d826b9459
