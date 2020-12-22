import notify from "./notify";

const requiredVars = ["DB", "SECRET_WORD"];

const required = () => {
  requiredVars.forEach((item) => {
    if (!process.env[item]) notify(`required env var is missing ${item}`);
  });
};

export default required;
