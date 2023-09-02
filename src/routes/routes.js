import { Router } from "express";
import { postInitRoute } from "./postRoutes.js";
import { getInitRoute } from "./getRoutes.js";
import { deleteRoute } from "./deleteRoutes.js";
import { middlewareRateLimit } from "../middlewares/middlewareRateLimit.js";
import { putInitRoute } from "./putRoutes.js";

const v1Routes = () => {
  const router = Router();
  router.use("/get", middlewareRateLimit, getInitRoute());
  router.use("/post", middlewareRateLimit, postInitRoute());
  return router;
};

const v2Routes = () => {
  const router = Router();
  router.use("/put", middlewareRateLimit, putInitRoute());
  router.use("/delete", middlewareRateLimit, deleteRoute());
  return router;
};

export { v1Routes, v2Routes };
