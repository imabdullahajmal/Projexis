import { error } from "console";
import { ErrorRequestHandler } from "express";
import { HTTPSTATUS } from "../config/http.config";

export const errorHandler: ErrorRequestHandler = (err, req, res, next):any => {

    console.error(`Error occured on PATH: ${req.path}`, err);
    if (error instanceof SyntaxError) {
        return res.status(HTTPSTATUS.BAD_REQUEST).json({ message: 'Invalid json format.' });
    }
    res.status(HTTPSTATUS.INTERNAL_SERVER_ERROR).json({
         message: 'Internal Server Error',
         error: err?.message || "Unknown Error"
    });
} 