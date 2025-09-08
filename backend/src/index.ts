import "dotenv/config"
import express from "express"
import { NextFunction, Request, Response } from "express"
import cors from "cors"
import session from "cookie-session"
import passport from "passport"
import { config } from "./config/app.config";
import connectDatabase from "./config/db.config"
import { errorHandler } from "./middleware/errorHandler.middleware"
import { HTTPSTATUS } from "./config/http.config"
import { asyncHandler } from "./middleware/asyncHandler.middleware"

const app = express()
const BASE_PATH = config.BASE_PATH;

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use(session({
    name: "session",
    secret: config.SESSION_SECRET,
    maxAge: 24 * 60 * 60 * 1000,
    secure: config.NODE_ENV === "production",
    httpOnly: true,
    sameSite: "lax",
}))

app.use(
    cors({
        origin: config.FRONTEND_URL,
        methods: ["GET", "POST", "PUT", "DELETE"],
        credentials: true,
    })
)

app.get(`/`, asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
    // throw new Error("Test Error");
    res.status(HTTPSTATUS.OK).json({
      message: "Hello Subscribe to the channel & share",
    });
  })
);

app.use(errorHandler);

app.listen(config.PORT, async () => {
    console.log(`Server listening on port ${config.PORT} in ${config.NODE_ENV}`);
    await connectDatabase();
});