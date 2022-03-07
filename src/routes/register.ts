import { db } from "../db";
import { MySQLResponse, User } from "../utils/interfaces";
import { generateToken } from "../utils/jwt";
import { Res, returnCode } from "../utils/returnCodes";
import { uuid } from "../utils/uuid";
import { password as pwdUtils } from "../utils/password";

const register = (app: any) => {
  app.post("/register", async function (req: any, res: Res) {
    const { firstname, lastname, email, password, passwordConfirm } = req.body;
    if (!firstname || !lastname || !email || !password || !passwordConfirm) {
      // Check if all the parameters are present
      return res
        .status(returnCode.missingParameters.code)
        .json(returnCode.missingParameters.payload);
    } else {
      // Check if the user already exists
      const user = await db.queryParams("SELECT * FROM users WHERE email = ?", [
        email,
      ]);
      if (user.length > 0) {
        return res
          .status(returnCode.userAlreadyExists.code)
          .json(returnCode.userAlreadyExists.payload);
      } else {
        if (password !== passwordConfirm) {
          // Check if the passwords match
          return res
            .status(returnCode.passwordMissmatch.code)
            .json(returnCode.passwordMissmatch.payload);
        } else {
          // Create and insert the user in the database
          const user_id = uuid();
          const encryptedPassword = await pwdUtils.hash(password);
          const token = generateToken({
            uuid: user_id,
            firstname: firstname,
            lastname: lastname,
            email: email,
            role: "USER",
          });
          console.log(user_id, encryptedPassword, token);

          const result: MySQLResponse = await db.queryParams(
            "INSERT INTO users (uuid, firstname, lastname, email, role, password, token) VALUES (?, ?, ?, ?, 'USER', ?, ?)",
            [user_id, firstname, lastname, email, encryptedPassword, token]
          );
          return res.status(returnCode.userCreated.code).json({
            id: result.insertId,
            uuid: user_id,
            firstname: firstname,
            lastname: lastname,
            email: email,
            role: "USER",
            token: token,
          });
        }
      }
    }
  });
};

export default register;
