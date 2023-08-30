import { Router } from "express";
import { postInitRoute } from "./postRoutes.js";
import { getInitRoute } from "./getRoutes.js";
import { deleteRoute } from "./deleteRoutes.js";
import { middlewareRateLimit } from "../middlewares/middlewareRateLimit.js";

const initAPIRoutes = () => {
  const router = Router();
  router.use("/get", middlewareRateLimit, getInitRoute());
  router.use("/post", middlewareRateLimit, postInitRoute());
  router.use("/delete", middlewareRateLimit, deleteRoute());
  return router;
};

export { initAPIRoutes };
