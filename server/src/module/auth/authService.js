import User from "../../models/userModel.js";
import argon2 from "argon2";

export const registerService = async ({ name, email, password }) => {

  // check if user already exists
  const existUser = await User.findOne({ where: { email } });

  if (existUser) {
    throw new Error("User already exists");
  }

  // hash password
  const hashedPassword = await argon2.hash(password);

  // create user
  const user = await User.create({
    name,
    email,
    password: hashedPassword
  });

  return user;
};

export const loginService = async ({ email, password }) => {

  const user = await User.findOne({ where: { email } });

  if (!user) {
    throw new Error("Invalid credentials");
  }

  // verify password
  const matchPassword = await argon2.verify(user.password, password);

  if (!matchPassword) {
    throw new Error("Invalid credentials");
  }

  return user;
};

export const logoutService = () => {
  return true;
};