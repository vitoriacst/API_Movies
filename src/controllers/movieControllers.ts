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

export async function findMovieById(req: Request , res: Response){
   try {
      const id = req.params.id
      const movie = await movieModel.findById(id)
      if(!movie){
         return res.status(404).json({error: "movie not found" })
      }
      return res.status(200).json(movie);
   } catch (error: any) {
      logger.error(`Erro no sistema: ${error.message}`)
   }
}

export async function getAllMovies (_req: Request , res: Response) {
   try {
      const movies = await movieModel.find()
      return res.status(200).json(movies)
   } catch (error: any) {
      logger.error(`Erro no sistema: ${error.message}`)
   }
}


export async function removeMovie(req: Request , res: Response) {
   try {
      const id = req.params.id
      const movie = await movieModel.findById(id)
      if(!movie){
         return res.status(404).json({error: "movie not found" })
      }
   } catch (error: any) {
      logger.error(`Erro no sistema: ${error.message}`)
      return res.status(500).json({error: "try again" })
   }
}
