import * as bcrypt from "bcrypt-nodejs";
import * as crypto from "crypto";
import * as mongoose from "mongoose";

export type UserModel = mongoose.Document & {
  email: string,
  password: string,
  passwordResetToken: string,
  passwordResetExpires: Date,

  profile: {
    firstName: String,
    lastName: String,
    gender: String,
    website: String,
    bio:String,
    picture: String
  },

  comparePassword: (candidatePassword: string, cb: (err: any, isMatch: any) => {}) => void,
  gravatar: (size: number) => string
};

export type AuthToken = {
  accessToken: string,
  kind: string
};

const userSchema = new mongoose.Schema({
  email: { type: String, unique: true },
  password: String,
  passwordResetToken: String,
  passwordResetExpires: Date,
  tokens: Array,
  profile: {
    firstName: String,
    lastName: String,
    gender: String,
    website: String,
    bio:String,
    picture: String
  }
}, { timestamps: true });


const User = mongoose.model("User", userSchema);
export default User;