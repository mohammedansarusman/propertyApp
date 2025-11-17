import mongoose from "mongoose";

let connected = false;

const connectedDB = async () => {
  mongoose.set("strictQuery", true);
  console.log("mongo db =>",connected);

  //  if database is connected
  if (connected) {
    console.log("MongoDB connected");
    return;
  }

  // Connect to MongoDB
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    connected = true;
  } catch (error) {
    console.log("error=>",error)
  }
};
export default connectedDB;
