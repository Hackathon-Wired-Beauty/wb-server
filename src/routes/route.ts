import { db } from "../db";
import { authorization } from "../middleware/authorization";
import { Res, returnCode } from "../utils/returnCodes";
const env = require("dotenv").config();

const { auth } = require("../middleware/auth");

const route = (app: any) => {
  app.post("/route", auth, authorization, async function (req: any, res: Res) {
    const { user } = req;
    res
      .status(200)
      .json({ route: { version: process.env.VERSION, user: user } });
  });
};

export default route;
