const { v4: uuidv4 } = require("uuid");

export const uuid = () => {
  return uuidv4();
};
