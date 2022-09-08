import { Request, Response } from "express";
import logger from "../../config/logger";
import { movieModel } from "../routes/models/Movies";

export async function createMovie(req: Request , res: Response){
  try {
     const data = req.body
     const movie = await movieModel.create(data)
     return res.status(201).json(movie)
  } catch (error: any) {
     logger.error(`Erro no sistema: ${error.message}`)
  }
}
