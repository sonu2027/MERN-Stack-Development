import { Router } from "express";
import { registerUser } from "./control.js";
import { upload } from "./multer.js";

const router = Router();

router.route("/sendemail").post(upload.fields([]), registerUser);

export default router;
