const env = require("dotenv").config();
import { User } from "./interfaces";
const jwt = require("jsonwebtoken");

export const generateToken = (user: User): string => {
  const token = jwt.sign(
    {
      id: user.id,
      uuid: user.uuid,
      first_name: user.firstname,
      last_name: user.lastname,
      email: user.email,
      role: user.role,
    },
    process.env.JWT_SECRET,
    {
      expiresIn: process.env.JWT_EXPIRATION,
    }
  );
  return token;
};

export const verifyJwt = (token: string): User => {
  const decoded = jwt.verify(token, process.env.JWT_SECRET);
  return decoded as User;
};
