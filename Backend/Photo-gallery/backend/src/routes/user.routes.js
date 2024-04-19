import { Router } from "express";
import { registerUser, loginUser } from "../controllers/user.controller.js";
import { upload } from "../middlewares/multer.middleware.js";
import { uploadImage } from "../controllers/image.controller.js";

const router = Router();

router.route("/register").post(
  upload.fields([
    {
      name: "image",
      maxCount: 1,
    }
  ]),
  registerUser
);

router.route("/").post(
  upload.fields([
    // {
    //   name: "image",
    //   maxCount: 1,
    // }
  ]),
  loginUser
);

router.route("/image").post(
  upload.fields([
    {
      name: "image",
      maxCount: 1,
    }
  ]),
  uploadImage
);

export default router;
