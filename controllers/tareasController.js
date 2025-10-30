import Tarea from "../models/tarea.js";

export const obtenerTareas = async (req, res) => {
  try {
    const tareas = await Tarea.find();
    res.json(tareas);
  } catch (error) {
    res.status(500).json({ error: "Error al obtener las tareas" });
  }
};

export const crearTarea = async (req, res) => {
  try {
    const { titulo, descripcion } = req.body;
    const nuevaTarea = new Tarea({ titulo, descripcion });
    await nuevaTarea.save();
    res.status(201).json(nuevaTarea);
  } catch (error) {
    res.status(500).json({ error: "Error al crear la tarea" });
  }
};

export const actualizarTarea = async (req, res) => {
  try {
    const { id } = req.params;
    const tareaActualizada = await Tarea.findByIdAndUpdate(id, req.body, { new: true });
    res.json(tareaActualizada);
  } catch (error) {
    res.status(500).json({ error: "Error al actualizar la tarea" });
  }
};

export const eliminarTarea = async (req, res) => {
  try {
    const { id } = req.params;
    await Tarea.findByIdAndDelete(id);
    res.json({ mensaje: "Tarea eliminada" });
  } catch (error) {
    res.status(500).json({ error: "Error al eliminar la tarea" });
  }
};
