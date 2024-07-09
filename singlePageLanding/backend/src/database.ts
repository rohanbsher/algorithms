import mongoose from 'mongoose';

const connectDB = async () => {
    const dbUri = process.env.DB_URI!;
    try {
        await mongoose.connect(dbUri);
        console.log('MongoDB connected successfully');
    } catch (err) {
        console.error('MongoDB connection error:', err);
        process.exit(1);
    }
};

export default connectDB;