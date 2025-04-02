# 📘 Documentación del Proyecto - DHTMLX Gantt en React

## 1️⃣ Descripción del Proyecto
Este proyecto consiste en la implementación de un diagrama de Gantt en React utilizando la librería **DHTMLX Gantt**. Se han desarrollado funcionalidades de **CRUD (Crear, Leer, Actualizar y Eliminar)** para gestionar actividades y subactividades dentro del Gantt, con almacenamiento en una base de datos **SQLite o PostgreSQL**. El backend está construido con **Node.js y Express** siguiendo la arquitectura **MVC**.

---

## 2️⃣ Tecnologías Utilizadas

### 🖥️ Frontend
- **React con Vite**: Framework de JavaScript para construir interfaces de usuario de forma eficiente y rápida.
- **DHTMLX Gantt**: Librería especializada para representar diagramas de Gantt interactivos.
- **Fetch API**: API nativa de JavaScript para realizar peticiones HTTP al backend.

### 🖥️ Backend
- **Node.js con Express**: Framework para construir APIs REST de manera rápida y flexible.
- **Sequelize ORM**: Librería de mapeo objeto-relacional (ORM) para gestionar bases de datos SQL en JavaScript.
- **SQLite/PostgreSQL**: Bases de datos relacionales utilizadas para almacenar las tareas del Gantt.

### 🔹 Arquitectura
- **Modelo-Vista-Controlador (MVC)**: Estructura organizativa que separa la lógica del negocio (Modelo), la interfaz de usuario (Vista) y la comunicación entre ambos (Controlador).

---

## 3️⃣ Funcionalidades Implementadas

### 📊 Gantt en React
- Visualización de actividades principales (**tasks**).
- Creación de subactividades (**subtasks**) de manera anidada.
- Agrupación de actividades en **proyectos (project tasks)**.
- Edición y eliminación de tareas dentro del Gantt.

### 🌐 API REST - Endpoints del Backend
La API provee los siguientes endpoints para la gestión de tareas:

**Endpoint:** `http://localhost:4000`

#### 📌 Obtener todas las tareas
- **Solicitud:** `GET /tasks`
- **Descripción:** Recupera todas las tareas registradas en la base de datos.
- **Respuesta:**
  ```json
  {
    "success": true,
    "data": [
      {
        "id": 1,
        "text": "Planificación inicial",
        "start_date": "2024-04-01",
        "duration": 5,
        "parent": 0,
        "type": "task"
      }
    ]
  }
  ```

#### 📌 Crear una nueva tarea
- **Solicitud:** `POST /tasks`
- **Descripción:** Crea una nueva tarea en el Gantt.
- **Cuerpo de la solicitud:**
  ```json
  {
    "text": "Nueva tarea",
    "start_date": "2024-04-05",
    "duration": 3,
    "parent": 0,
    "type": "task"
  }
  ```
- **Respuesta:**
  ```json
  {
  "message": "Tarea \"Nueva tarea\" creada exitosamente",
  "task": {
    "id": 5,
    "text": "Nueva tarea",
    "start_date": "2024-04-05T00:00:00.000Z",
    "duration": 3,
    "parent": 0,
    "type": "task",
    "updatedAt": "2025-04-03T20:59:30.621Z",
    "createdAt": "2025-04-03T20:59:30.621Z"
  }
   }
  ```

#### 📌 Actualizar una tarea
- **Solicitud:** `PUT /tasks/:id`
- **Descripción:** Modifica los datos de una tarea existente.
- **Cuerpo de la solicitud:**
  ```json
  {
  "text": "Tarea 2",
  "start_date": "4/2/2025",
  "duration": 5,
  "parent": 0
   }
  ```
- **Respuesta:**
  ```json
  {
  "message": "Tarea \"Tarea 2\" actualizada correctamente",
  "task": {
    "id": 2,
    "text": "Tarea 2",
    "start_date": "2025-04-02T05:00:00.000Z",
    "duration": 5,
    "parent": 0,
    "type": "task",
    "createdAt": "2025-04-03T17:33:08.489Z",
    "updatedAt": "2025-04-03T20:57:25.139Z"
  }
   }
  ```

#### 📌 Eliminar una tarea
- **Solicitud:** `DELETE /tasks/:id`
- **Descripción:** Elimina una tarea por su ID.
- **Respuesta:**
  ```json
   {
   "message": "La tarea \"Nueva tarea\" ha sido eliminada exitosamente."
   }
  ```

---

## 4️⃣ Estructura del Proyecto

```plaintext
📦 Prueba Tecnica - DHTMLX gantt
 ├── 📂 api
 │   ├── 📂 config        # Configuración de base de datos y entorno
 │   ├── 📂 controllers   # Lógica de negocio y manejo de solicitudes
 │   ├── 📂 models        # Definición de modelos de datos con Sequelize
 │   ├── 📂 routes        # Definición de rutas y endpoints
 │   ├── 📜 server.js     # Punto de entrada del backend
 ├── 📂 node_modules      # Dependencias del proyecto
 ├── 📂 public            # Archivos estáticos
 ├── 📂 src
 │   ├── 📂 assets        # Recursos como imágenes y fuentes
 │   ├── 📂 components    # Componentes reutilizables de React
 │   ├── 📂 services      # Comunicación con la API
 │   ├── 📂 styles        # Hojas de estilos
 │   ├── 📜 App.jsx       # Componente principal de la aplicación
 │   ├── 📜 main.jsx      # Punto de entrada del frontend
 ├── 📜 .envTemplate      # Plantilla para variables de entorno
 ├── 📜 .gitignore        # Archivos y carpetas ignoradas por Git
 ├── 📜 eslint.config.js  # Configuración de ESLint
 ├── 📜 index.html        # Archivo base HTML
 ├── 📜 package-lock.json # Control de versiones de dependencias
 ├── 📜 package.json      # Archivo de configuración del proyecto
 ├── 📜 README.md         # Documentación del proyecto
 ├── 📜 vite.config.js    # Configuración de Vite
```

---

## 5️⃣ Instalación y Configuración

### 🔹 Clonación e Instalación
1. Clonar el repositorio:
   ```bash
   git clone https://github.com/KevinGalvisSA/Prueba-Tecnica---DHTMLX-gantt
   ```
2. Instalar dependencias:
   ```bash
   npm install
   ```
3. Ejecutar el backend:
   ```bash
   npm run api
   ```

---