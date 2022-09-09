import { body } from "express-validator";

export const movieCreateValidation = () => {
  return [
    body('title')
      .isString()
      .withMessage("the title is required")
      .isLength({min: 5})
      .withMessage("the title must have 5 characters"),
    body('rating')
      .isNumeric()
      .withMessage("the rating must be a number")
      .custom((value: number) => {
        if(value < 0 || value > 0){
          throw new Error("the rating must be from 0 to 10")
        }
        return true;
      }),
      body("description").isString().withMessage("the description is mandatory"),
      body("director").isString().withMessage("the name of the director is mandatory"),
      body("poster").isURL().withMessage("the image must be a URL")
  ]
}
