import mongoose from "mongoose";

const tareaSchema = new mongoose.Schema({
  titulo: { type: String, required: true },
  descripcion: { type: String },
  completada: { type: Boolean, default: false },
});

export default mongoose.model("Tarea", tareaSchema);
