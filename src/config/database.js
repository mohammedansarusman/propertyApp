import mongoose from "mongoose";

let connected = false;

const connectedDB = async () => {
  mongoose.set("strictQuery", true);

  if (connected) {
    console.log("MongoDB already connected");
    return;
  }

  try {
    const conn = await mongoose.connect(process.env.MONGODB_URI);

    connected = true;
    console.log("MongoDB connected:", conn.connection.host);
  } catch (error) {
    console.log("DB Connection Error =>", error);
  }
};

export default connectedDB;
