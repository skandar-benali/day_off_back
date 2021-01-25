import optional from "./optional";
import required from "./required";
import format from "./format";

required();
optional();
format();

const runtimeVars = {
  NODE_ENV: process.env.NODE_ENV || "DEV",
  PORT: Number(process.env.PORT) || 4000,
  DB: process.env.DB,
  SECRET_WORD: process.env.SECRET_WORD
};

export default runtimeVars;
