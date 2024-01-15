import jwt from "jsonwebtoken";
import { createError } from "../error.js";

export const verifyToken = (req, res, next) => {
  if (!req.headers.authorization) {
    return res.status(401).json({message:"Unauthorised Access"})
  }
  
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer ")
  ) {
    const token = req.headers.authorization.split(" ")[1];
    jwt.verify(token, process.env.JWT, (err, data) => {
      if (err) {
        return next(createError(403, "Invalid Token"));
      } else {
        req.user = data;
        next();
      }
    });
  }
};
