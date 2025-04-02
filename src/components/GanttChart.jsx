import React, { useEffect, useRef } from "react";
import "dhtmlx-gantt/codebase/dhtmlxgantt.css";
import gantt from "dhtmlx-gantt";
import "../App.jsx";
import { getTasks, createTask, updateTask, deleteTask } from "../services/service.jsx";

const GanttChart = () => {
  const ganttContainer = useRef(null);
  const isTaskBeingAdded = useRef(false);
  useEffect(() => {
    gantt.init(ganttContainer.current);
    gantt.render();

    // Evitar eventos duplicados
    gantt.detachAllEvents();

    // Configuración de la lightbox
    gantt.config.lightbox.sections = [
      { name: "text", height: 30, map_to: "text", type: "textarea" },
      {
        name: "type",
        type: "select",
        map_to: "type",
        options: [
          { key: "task", label: "Tarea" },
          { key: "project", label: "Proyecto" },
        ],
      },
      { name: "time", type: "duration", map_to: "auto" },
    ];

    // Carga de datos desde la API
    getTasks().then((tasks) => {
      gantt.clearAll();
      gantt.parse({ data: tasks });
    });

    // Creacion de tasks
    gantt.attachEvent("onAfterTaskAdd", async (id, task) => {
      if (isTaskBeingAdded.current) return;
      isTaskBeingAdded.current = true;

      console.log("Tarea Creada:", task);

      const parentId = task.parent && gantt.getTask(task.parent) ? task.parent : 0;

      try {
        const response = await createTask({
          text: task.text,
          start_date: task.start_date,
          duration: task.duration,
          parent: parentId,
          type: task.type || "task",
        });

        console.log("Tarea creada en la base:", response);

        if (response.task?.id) {
          gantt.changeTaskId(id, response.task.id); // Asignar ID correcto desde backend
        }
      } catch (error) {
        console.error("Error al crear tarea:", error);
      }

      setTimeout(() => {
        isTaskBeingAdded.current = false;
      }, 500);
    });

    // Actualizacion de tasks
    gantt.attachEvent("onAfterTaskUpdate", (id, task) => {
      updateTask(id, {
        text: task.text,
        start_date: task.start_date,
        duration: task.duration,
        parent: task.parent,
        type: task.type,
      }).then((data) => console.log("Tarea actualizada:", data));
    });

    // Eliminacion de task
    gantt.attachEvent("onAfterTaskDelete", (id) => {
      deleteTask(id).then((data) => console.log("Tarea eliminada:", data));
    });

    return () => {
      gantt.clearAll();
    };
  }, []);

  return <div ref={ganttContainer} className="gantt-container" />;
};

export default GanttChart;
