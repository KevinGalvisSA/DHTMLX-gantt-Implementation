// Functions to communicate with the backend
const API_URL = "https://prueba-tecnica-dhtmlx-gantt-production.up.railway.app/tasks";

// Obtener todas las tareas
export const getTasks = async () => {
  try {
    const response = await fetch("https://prueba-tecnica-dhtmlx-gantt-production.up.railway.app/tasks");
    const data = await response.json();
    console.log(data);
    return data.data || [];
  } catch (error) {
    console.error("Error al obtener tareas:", error);
    return [];
  }
};

// Crear una nueva tarea
export const createTask = async (task) => {
  try {
    const response = await fetch("https://prueba-tecnica-dhtmlx-gantt-production.up.railway.app/tasks", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(task),
    });
    return await response.json();
  } catch (error) {
    console.error("Error al crear tarea:", error);
  }
};

// Actualizar una tarea
export const updateTask = async (id, task) => {
  try {
    const response = await fetch(`https://prueba-tecnica-dhtmlx-gantt-production.up.railway.app/tasks/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(task),
    });
    return await response.json();
  } catch (error) {
    console.error("Error al actualizar tarea:", error);
  }
};

// Eliminar una tarea
export const deleteTask = async (id) => {
  try {
    const response = await fetch(`https://prueba-tecnica-dhtmlx-gantt-production.up.railway.app/tasks/${id}`, {
      method: "DELETE",
    });
    return await response.json();
  } catch (error) {
    console.error("Error al eliminar tarea:", error);
  }
};
