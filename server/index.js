import express from "express";
import cors from "cors";

const app = express();
const puerto = 4000;
app.use(cors());
app.use(express.json());
app.listen(puerto);

console.log("corriendo en el puerto", puerto);
