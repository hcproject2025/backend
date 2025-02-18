import mongoose from "mongoose";

async function connectDB() {
  await mongoose.connect(
    "mongodb+srv://hcproject2025:DhqBAs91jjHvej5q@hcproject.sln8p.mongodb.net/?retryWrites=true&w=majority&appName=hcproject"
  );
  console.log(`MongoDB connection estabilished`);
}

export { connectDB };
