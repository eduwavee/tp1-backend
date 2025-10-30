import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import morgan from "morgan";
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";
import tareasRoutes from "./routes/tareasRoutes.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config({ path: path.resolve(__dirname, ".env") });

const app = express();

app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

const uri = process.env.MONGODB_URI;

mongoose
  .connect(uri)
  .then(() => console.log("✅ Conectado a MongoDB"))
  .catch((err) => console.error("❌ Error de conexión:", err));

app.get("/", (req, res) => {
  res.send("API Lista de Tareas funcionando 🚀");
});

app.use("/api/tareas", tareasRoutes);


export default app;
