import mongoose from "mongoose";

let connected = false;

const connectedDB = async () => {
  mongoose.set("strictQuery", true);

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
    console.log(error)
  }
};
export default connectedDB;
