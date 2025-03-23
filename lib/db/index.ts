import mongoose from "mongoose";

interface MongooseCache {
  conn: typeof mongoose | null;
  promise: Promise<typeof mongoose> | null;
}

// global nesnesine tip tanımlaması yaparak any kullanımını engelliyoruz
const globalWithMongoose = global as unknown as {
  mongoose: MongooseCache;
};

const cached = globalWithMongoose.mongoose || { conn: null, promise: null };

export const connectToDatabase = async (
    MONGODB_URI = process.env.MONGODB_URI
) => {
    if (cached.conn) return cached.conn
    if(!MONGODB_URI) throw new Error('MONGODB_URI is not defined')

    cached.promise = cached.promise || mongoose.connect(MONGODB_URI)
    cached.conn = await cached.promise
    return cached.conn
}


