import express from "express";
import config from "./config";
import "./database";
const app = express();

config(app);

app.listen(3000, () =>
  console.log("El servidor ha sido inicializado: http://localhost:3000")
);