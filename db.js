import mongoose from "mongoose";

async function connectDB() {
  await mongoose.connect(process.env.MONGO_URI);
  console.log(`MongoDB connection estabilished`);
}

export { connectDB };
