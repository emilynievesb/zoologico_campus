import express from "express";
import { v1Routes, v2Routes } from "./routes/routes.js";
import routesVersioning from "express-routes-versioning";
import { appToken } from "./middlewares/middlewareContent.js";

const version = routesVersioning();
const app = express();

app.use(express.json()); //! Middleaware para leer json
app.use("/token", appToken)
app.use(
  "/api",
  version({
    "1.0.0": v1Routes(),
    "2.0.0": v2Routes(),
  })
);

export default app;
