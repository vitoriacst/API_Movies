import mongoose from "mongoose";
import config from "config";
import Logger from './logger'

async function connection() {
  const dbUri = config.get<string>("dbUri");
  try {
    await mongoose.connect(dbUri);
    Logger.info("successful database connection");

  } catch (error) {
    Logger.error("could not connect");
    Logger.error(`Error ${error}`);
    process.exit(1)
  }
}

export default connection;
