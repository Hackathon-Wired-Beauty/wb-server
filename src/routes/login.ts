import { db } from "../db";
import { User } from "../utils/interfaces";
import { Res, returnCode } from "../utils/returnCodes";

import { password as pwdUtils } from "../utils/password";
import { generateToken } from "../utils/jwt";

const login = (app: any) => {
  app.post("/login", async function (req: any, res: Res) {
    const { email, password } = req.body;
    if (!email || !password) {
      // Check if all the parameters are present
      return res
        .status(returnCode.missingParameters.code)
        .json(returnCode.missingParameters.payload);
    } else {
      // Check if the user already exists and if account isn't disabled/soft deleted
      const userDb: User[] = await db.queryParams(
        "SELECT * FROM users WHERE email = ?",
        [email]
      );
      if (userDb.length > 0 && userDb[0].deletedAt === null) {
        const user = userDb[0];
        const isPasswordValid = await pwdUtils.verify(password, user.password!);
        if (isPasswordValid) {
          const token = generateToken({
            uuid: user.uuid,
            firstname: user.firstname,
            lastname: user.lastname,
            email: user.email,
            role: user.role,
          });
          return res.status(returnCode.userLoggedIn.code).json({
            id: user.id,
            uuid: user.uuid,
            firstname: user.firstname,
            lastname: user.lastname,
            email: user.email,
            role: user.role,
            token: token,
            createdAt: user.createdAt,
            deletedAt: user.deletedAt,
          });
        } else {
          return res
            .status(returnCode.passwordMissmatch.code)
            .json(returnCode.passwordMissmatch.payload);
        }
      } else {
        return res
          .status(returnCode.unknownUser.code)
          .json(returnCode.unknownUser.payload);
      }
    }
  });
};

export default login;
