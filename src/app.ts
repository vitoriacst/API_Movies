import express  from "express";
import config from "config";
import db from "../config/db"
require('dotenv').config();

const app = express()

app.use(express.json())

import router from './routes/routes';
import Logger from '../config/logger'

app.use("/api/", router);

const port = config.get<number>("port");

app.listen(3000, async ()=>{
  await db();
  Logger.info(`The application is running on port ${port}`);
})
