// Main server file that configures Express

require("dotenv").config();
const express = require("express");
const cors = require("cors");
const sequelize = require("./config/config.js");
const taskRoutes = require("./routes/route.js");

const app = express();
app.use(cors());
app.use(express.json());

// Sincronizar base de datos
sequelize.sync({ alter: true }) // O usar force: true si deseas borrar y recrear
  .then(() => console.log("Base de datos sincronizada con PostgreSQL en Railway"))
  .catch((error) => console.error("Error al sincronizar la base de datos:", error));

// Ruta de inicio servidor
app.get("/help", (req, res) => {
  res.send("Holas");
});

// Ruta solicitudes CRUD
app.use("/tasks", taskRoutes);

app.listen(4000, () => console.log("Servidor corriendo en http://localhost:4000"));

