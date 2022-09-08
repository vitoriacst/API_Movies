import mongoose from "mongoose";
import config from "config";

async function connection() {
  const dbUri = config.get<string>("dbUri");
  try {
    await mongoose.connect(dbUri);
    console.log("successful database connection");

  } catch (error) {
    console.log("could not connect");
    console.log(`Error ${error}`);
  }
}

export default connection;
