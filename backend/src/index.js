import express from "express";
const app = express();

app.listen(3000, () =>
  console.log("El servidor ha sido inicializado: http://localhost:3000")
);