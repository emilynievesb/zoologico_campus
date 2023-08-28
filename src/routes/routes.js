import { Router } from "express";
import { postInitRoute } from "./postRoutes.js";
import { getInitRoute } from "./getRoutes.js";
import { deleteRoute } from "./deleteRoutes.js";

const initAPIRoutes = () => {
  const router = Router();
  router.use("/get", getInitRoute());
  router.use("/post", postInitRoute());
  router.use("/delete", deleteRoute());
  return router;
};

export { initAPIRoutes };
