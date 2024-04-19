import { ApiError } from "../utils/ApiError.js";
import { Image } from "../models/image.model.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { uploadOnCloudinary } from "../utils/cloudinary.js";

const uploadImage = async (req, res, next) => {
  const { ownerId } = req.body;

  console.log("req.body........", req.body);
  console.log("gghgh", ownerId);
  console.log("req.files........", req.files);

  let imageLocalPath;
  if (
    req.files &&
    Array.isArray(req.files.image) &&
    req.files.image.length > 0
  ) {
    imageLocalPath = req.files.image[0].path;
  }
  console.log("imagelocalpath: ", imageLocalPath);
  const response = await uploadOnCloudinary(imageLocalPath);

  console.log("Image: ", response);

  const image = await Image.create({
    image: response?.url || "",
    ownerId,
  });

  const createdImage = await Image.findById(image._id);

  if (!createdImage) {
    throw new ApiError(500, "Something went wrong while registering the user");
  }

  const images = await Image.find();

  return res
    .status(201)
    .json(new ApiResponse(200, images, "Image uploaded successfully"));
};

export { uploadImage};
