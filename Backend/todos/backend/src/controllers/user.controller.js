import { ApiError } from "../utils/ApiError.js";
import { User } from "../models/user.model.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { uploadOnCloudinary } from "../utils/cloudinary.js";

const registerUser = async (req, res, next) => {
  // get user details from frontend
  // validation - not empty
  // check if user already exists: username, email
  // check for images, check for avatar
  // upload them to cloudinary, avatar
  // create user object - create entry in db
  // remove password and refresh token field from response
  // check for user creation
  // return res

  const { fullName, email, username, password } = req.body;

  console.log("req.body........", req.body);
  console.log("req.files........", req.files);

  if (
    [fullName, email, username, password].some((field) => field?.trim() === "")
  ) {
    throw new ApiError(400, "All fields are required");
  }

  const existedUser = await User.findOne({
    $or: [{ username }, { email }],
  });

  if (existedUser) {
    throw new ApiError(409, "User with email or username already exists");
  }

  let imageLocalPath;
  if (
    req.files &&
    Array.isArray(req.files.image) &&
    req.files.image.length > 0
  ) {
    imageLocalPath = req.files.image[0].path;
  }
  console.log("imagelocalpath: ", imageLocalPath);
  const image = await uploadOnCloudinary(imageLocalPath);

  console.log("Image: ", image);

  const user = await User.create({
    fullName,
    email,
    password,
    username,
    image: image?.url || "",
  });

  const createdUser = await User.findById(user._id).select("-password");

  if (!createdUser) {
    throw new ApiError(500, "Something went wrong while registering the user");
  }

  return res
    .status(201)
    .json(new ApiResponse(200, createdUser, "User registered Successfully"));
};

const loginUser = async (req, res, next) => {
  const { email, password } = req.body;
  console.log("req.body in login: ", req.body);
  try {
    const users = await User.find();

    const foundUser = users.filter(
      (e) => e.email === email && e.password === password
    );

    if (foundUser.length == 0) {
      return res
      .status(500)
      .json(new ApiResponse(200, {}, "User not found"));
      // throw new ApiError(500, "User not found");
    }

    return res
      .status(201)
      .json(new ApiResponse(200, foundUser, "User logged in Successfully"));
  } catch (error) {
    console.error("Error fetching users:", error);
    return []; // Return an empty array or handle the error as needed
  }
};

export { registerUser, loginUser };
