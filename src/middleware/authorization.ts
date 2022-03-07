import { Res, returnCode } from "../utils/returnCodes";

export const authorization = (req: any, res: Res, next: any) => {
  const { user } = req;
  if (user.role === "ADMIN") {
    next();
  } else {
    res
      .status(returnCode.unauthorized.code)
      .json(returnCode.unauthorized.payload);
  }
};
