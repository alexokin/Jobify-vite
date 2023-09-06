import { Router } from "express";

const router = Router();

import {
  getAllJobs,
  getJob,
  deleteJob,
  editJob,
  createJob,
} from "../controllers/jobController.js";
import { validateIdParam, validateJobInput } from "../middleware/validationMiddleware.js";

router.route("/").get(getAllJobs).post(validateJobInput, createJob);
router
  .route("/:id")
  .get(validateIdParam, getJob)
  .patch(validateJobInput,validateIdParam, editJob)
  .delete(validateIdParam, deleteJob);

export default router;
