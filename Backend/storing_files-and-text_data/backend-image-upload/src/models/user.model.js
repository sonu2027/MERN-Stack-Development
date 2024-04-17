import mongoose, {Schema} from "mongoose";

const userSchema = new Schema(
    {
        image:{
            type:String,
            required: true
        }
    },
    {
        timestamps: true
    }
)

export const User = mongoose.model("User", userSchema)