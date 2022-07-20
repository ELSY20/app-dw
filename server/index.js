import express from "express";
import cors from "cors";
import actasRoutes from "./routes/actas.routes.js";
import compromisosRoutes from "./routes/compromisos.routes.js"

const app = express();
const puerto = 4000;
app.use(cors());
app.use(express.json());
app.listen(puerto);
app.use(actasRoutes);
app.use(compromisosRoutes);

console.log("corriendo en el puerto", puerto);
