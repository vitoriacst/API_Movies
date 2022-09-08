import express  from "express";
import config from "config";

const app = express()

app.use(express.json())

import router from './routes/routes';
app.use("/api/", router);

const port = config.get<number>("port");

app.listen(3000, async ()=>{
  console.log(`The application is running on port ${port}`);
})
