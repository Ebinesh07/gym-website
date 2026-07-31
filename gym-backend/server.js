import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/db.js";

import adminRoutes from "./routes/adminRoutes.js";
import contactRoutes from "./routes/contactRoutes.js";
import registrationRoutes from "./routes/registrationRoutes.js";

dotenv.config();

const app = express();

// 👇 Paste the new CORS code here

const allowedOrigins = [
  "http://localhost:5173",
  "https://gym-website-1-fzl3.onrender.com",
];

app.use(
  cors({
    origin(origin, callback) {
      // Allow requests with no Origin (Postman, curl, etc.)
      if (!origin) return callback(null, true);

      if (allowedOrigins.includes(origin)) {
        return callback(null, true);
      }

      return callback(new Error("Not allowed by CORS"));
    },
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true,
  })
);

// Handle preflight requests
app.options("*", cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));



// Routes...