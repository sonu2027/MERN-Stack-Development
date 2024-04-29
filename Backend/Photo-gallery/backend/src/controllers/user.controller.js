import { ApiError } from "../utils/ApiError.js";
import { User } from "../models/user.model.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import {
  deleteFromCloudinary,
  uploadOnCloudinary,
} from "../utils/cloudinary.js";

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
    image_public_id: image?.public_id || "",
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
      return res.status(500).json(new ApiResponse(200, {}, "User not found"));
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

const updateProfile = async (req, res, next) => {
  
  let { fullName, userId, email, password, username } = req.body;
  console.log("req.body: ", req.body);
  console.log("req.files", req.files);
  if (fullName) {
    try {
      console.log("Full name and userId", fullName, userId);

      // Update anme of user
      const updationResult = await User.updateOne(
        { _id: userId }, // Filter
        { $set: { fullName: fullName } }
      );
      console.log("updation result: ", updationResult);

      return res
        .status(201)
        .json(new ApiResponse(200, fullName, "name updated successfully"));
    } catch (error) {
      console.error("Error updating name:", error);
      return res.status(500).json({ error: "Failed to update name" });
    }
  } else if (username) {
    try {
      console.log("username and userId", username, userId);

      // Update anme of user
      const updationResult = await User.updateOne(
        { _id: userId }, // Filter
        { $set: { username: username } }
      );
      console.log("updation result: ", updationResult);

      return res
        .status(201)
        .json(new ApiResponse(200, username, "username updated successfully"));
    } catch (error) {
      console.error("Error updating username:", error);
      return res.status(500).json({ error: "Failed to update username" });
    }
  } else if (email) {
    try {
      console.log("email and userId", email, userId);

      // Update anme of user
      const updationResult = await User.updateOne(
        { _id: userId }, // Filter
        { $set: { email: email } }
      );
      console.log("updation result: ", updationResult);

      return res
        .status(201)
        .json(new ApiResponse(200, email, "email updated successfully"));
    } catch (error) {
      console.error("Error updating email:", error);
      return res.status(500).json({ error: "Failed to update email" });
    }
  } else if (password) {
    try {
      console.log("username and userId", password, userId);

      if (password[0] != password[1]) {
        console.log("password doesn't match");
        throw error;
      }

      // Update anme of user
      const updationResult = await User.updateOne(
        { _id: userId }, // Filter
        { $set: { password: password[0] } }
      );
      console.log("updation result: ", updationResult);

      return res
        .status(201)
        .json(new ApiResponse(200, password, "password updated successfully"));
    } catch (error) {
      console.error("Error updating password:", error);
      return res.status(500).json({ error: "Failed to update password" });
    }
  } else {
    try {
      let { userId } = req.body;

      console.log("userId", userId);

      console.log("req.files: ", req.files);

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

      // delete previoud profile picture from cloudinary
      let get_user = await User.find();
      get_user = get_user.filter((e) => e._id == userId);
      let user_pub_id = get_user[0].image_public_id;

      deleteFromCloudinary(user_pub_id);

      // Update Image of user
      const updationResult = await User.updateOne(
        { _id: userId }, // Filter
        { $set: { image: image.url, image_public_id: image.public_id } }
      );
      console.log("updation result: ", updationResult);

      return res
        .status(201)
        .json(new ApiResponse(200, image.url, "pp updated successfully"));
    } catch (error) {
      console.error("Error updating pp:", error);
      // return
    }
  }
};

export { registerUser, loginUser, updateProfile };
