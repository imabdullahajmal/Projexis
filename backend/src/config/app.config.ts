import {getEnv} from "../utils/get-env";


const appConfig = () => ({
    NODE_ENV: getEnv("NODE_ENV", "development"),
    PORT: getEnv("APP_PORT", "3000"),
    HOST: getEnv("APP_HOST", "localhost"),
    BASE_PATH: getEnv("BASE_PATH", "/api"),
    MONGO_URI: getEnv("MONGO_URI", ""),

    SESSION_SECRET: getEnv("SESSION_SECRET", ""),
    SESSION_EXPIRES_IN: getEnv("SESSION_EXPIRES_IN"),

    GOOGLE_CLIENT_ID: getEnv("GOOGLE_CLIENT_ID", ""),
    GOOGLE_CLIENT_SECRET: getEnv("GOOGLE_CLIENT_SECRET", ""),
    GOOGLE_CALLBACK_URL: getEnv("GOOGLE_CALLBACK_URL", ""),

    FRONTEND_URL: getEnv("FRONTEND_URL", "http://localhost:5173"),
    FRONTEND_GOOGLE_REDIRECT_URI: getEnv("FRONTEND_GOOGLE_REDIRECT_URI", "http://localhost:5173/auth/callback"),
});

export const config = appConfig();