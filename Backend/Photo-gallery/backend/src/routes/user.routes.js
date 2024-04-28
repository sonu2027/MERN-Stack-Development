import { Router } from "express";
import {
  registerUser,
  loginUser,
  updateName
} from "../controllers/user.controller.js";
import { upload } from "../middlewares/multer.middleware.js";
import { uploadImage } from "../controllers/image.controller.js";

const router = Router();

router.route("/register").post(
  upload.fields([
    {
      name: "image",
      maxCount: 1,
    },
  ]),
  registerUser
);

router.route("/").post(upload.fields([]), loginUser);

router.route("/image").post(
  upload.fields([
    {
      name: "image",
      maxCount: 1,
    },
  ]),
  uploadImage
);

router.route("/image").put(
  upload.fields([
    {
      name: "image",
      maxCount: 1,
    },
  ]),
  updateName
);

export default router;
