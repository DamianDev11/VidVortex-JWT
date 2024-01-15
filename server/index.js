import express from "express";
import dotenv from "dotenv";
import userRoutes from "./routes/api/users.js";
import commentRoutes from "./routes/api/comments.js";
import videoRoutes from "./routes/api/videos.js";
import authRoutes from "./routes/api/auth.js";
import cors from "cors";
import compression from "compression";
import connectToDb from "./db/index.js";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 7000;

app.use(cors({credentials: true}));
app.set("trust proxy", 1);
app.use(compression());
app.use(express.json());
app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
app.use("/api/comments", commentRoutes);
app.use("/api/videos", videoRoutes);

app.use((err, req, res, next) => {
  const status = err.status || 500;
  const message = err.message || "Something went wrong";
  res.status(status).json({
    success: false,
    status,
    message,
  });
});

Promise.all([connectToDb()])
  .then(() =>
    app.listen(PORT, () => console.log(`Server is running on PORT ${PORT}`))
  )
  .catch((error) => {
    console.error(`MongoDB Atlas Error: ${error}`);
    process.exit();
  });
