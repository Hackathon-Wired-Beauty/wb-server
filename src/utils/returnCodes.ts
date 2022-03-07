export const returnCode = {
  missingToken: {
    code: 403,
    payload: {
      title: "missing_token",
      message: "Missing token, couldn't authenticate",
    },
  },
  invalidToken: {
    code: 401,
    payload: {
      title: "invalid_token",
      message: "Invalid token, couldn't authenticate",
    },
  },
  unauthorized: {
    code: 403,
    payload: {
      title: "unauthorized",
      message:
        "Unautthorized, you don't have the permission to do this or access this resource",
    },
  },
  missingParameters: {
    code: 400,
    payload: {
      title: "missing_parameters",
      message: "Missing parameters!",
    },
  },
  unknownUser: {
    code: 400,
    payload: {
      title: "unknown_user",
      message:
        "Unknown user! The user you trying to get insn't present in the database.",
    },
  },
  userAlreadyExists: {
    code: 409,
    payload: {
      title: "already_exists",
      message:
        "The user already exists, please change the email address or try to login.",
    },
  },
  passwordMissmatch: {
    code: 400,
    payload: {
      title: "password_missmatch",
      message: "The passwords you entered don't match, please try again.",
    },
  },
  userCreated: {
    code: 201,
    payload: {
      title: "user_created",
      message: "The user has been successfully created.",
    },
  },
  userLoggedIn: {
    code: 200,
    payload: {
      title: "user_logged_in",
      message: "The user has been successfully logged in.",
    },
  },
  internalError: {
    code: 500,
    payload: {
      title: "internal_server_error",
      message: "Internal server error! Check logs",
    },
  },
};

export interface Res {
  status: (code: number) => any;
  json: (json: any) => any;
}
