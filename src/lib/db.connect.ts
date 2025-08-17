import mongoose from "mongoose";

type ConnectionObject = {
  isConnected?: number;
};

const connection: ConnectionObject = {};

async function dbConnect(): Promise<void> {
  if (connection.isConnected) {
    console.log("Already connected");
    return;
  }

  try {
    // const URL = `mongodb://${DATABASE_CONFIG.HOST}/${DATABASE_CONFIG.NAME}`;
    // const db = await mongoose.connect(process.env.MONGODB_URL ?? "", {});
    const db = await mongoose.connect(process.env.MONGODB_URL ?? "", {});
    connection.isConnected = db.connections[0].readyState;
    console.log("DB Connected Successfully");
  } catch (error) {
    console.log("Database Connection Error", error);
    process.exit(1);
  }
}

export default dbConnect;
