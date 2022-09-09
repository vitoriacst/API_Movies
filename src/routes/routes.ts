import { Request, Response, Router } from "express";
import { createMovie } from "../controllers/movieControllers";
import { validate } from '../middleware/handleValidation';
import { movieCreateValidation } from "../middleware/movieValidation";

const router = Router()

export default router.get("/test", (req: Request , res: Response)=>{
  res.status(200).send("ok!")
}).post("/movie" , movieCreateValidation ,validate, createMovie)
