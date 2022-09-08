import { Request, Response } from "express";
import { movieModel } from "../routes/models/Movies";

export async function createMovie(req: Request , res: Response){
  return res.status(200).send("ok")
}
