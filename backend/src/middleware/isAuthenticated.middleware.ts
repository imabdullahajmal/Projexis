import { NextFunction, Response } from "express";
import { UnauthorizedException } from "../utils/appError";
import { UserDocument } from "../models/user.model";

interface AuthenticatedRequest extends Express.Request {
  user?: UserDocument;
}

const isAuthenticated = (req: AuthenticatedRequest, res: Response, next: NextFunction) => {
  if (!req.user || !req.user._id) {
    throw new UnauthorizedException("Unauthorized. Please log in.");
  }
  next();
};

export default isAuthenticated;