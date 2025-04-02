// CRUD operations

const Task = require("../models/task");

// Obtener todas las tareas
const getTasks = async (req, res) => {
    try {
        const tasks = await Task.findAll();
        const formattedTasks = tasks.map(task => ({
            id: task.id,
            text: task.text,
            start_date: new Date(task.start_date).toLocaleDateString("es-ES"),
            duration: task.duration,
            parent: task.parent
        }));

        res.json({ message: "Tareas obtenidas correctamente", data: formattedTasks });
    } catch (error) {
        res.status(500).json({ error: "Error al obtener tareas" });
    }
};

// Crear una nueva tarea
const createTask = async (req, res) => {
    try {
        const task = await Task.create(req.body);
        res.json({ message: `Tarea "${task.text}" creada exitosamente`, task });
    } catch (error) {
        res.status(500).json({ error: "Error al crear la tarea" });
    }
};

// Eliminar una tarea
const deleteTask = async (req, res) => {
    try {
        const task = await Task.findByPk(req.params.id);
        if (!task) {
            return res.status(404).json({ message: "Tarea no encontrada" });
        }
        const message = `La tarea "${task.text}" ha sido eliminada exitosamente.`;
        await task.destroy();
        res.json({ message });
    } catch (error) {
        res.status(500).json({ error: "Error al eliminar la tarea" });
    }
};

// Actualizar una tarea
const updateTask = async (req, res) => {
    try {
        const task = await Task.findByPk(req.params.id);
        if (!task) {
            return res.status(404).json({ message: "Tarea no encontrada" });
        }

        await task.update(req.body);
        res.json({ message: `Tarea "${task.text}" actualizada correctamente`, task });
    } catch (error) {
        res.status(500).json({ error: "Error al actualizar la tarea" });
    }
};

module.exports = {
    getTasks,
    createTask,
    deleteTask,
    updateTask
};
