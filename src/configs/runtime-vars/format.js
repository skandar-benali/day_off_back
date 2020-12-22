import notify from "./notify";

const nodeEnvValues = ["DEV", "TEST", "PROD"];


const format = () => {
  const { NODE_ENV, readOnly: PORT } = process.env;
  if (NODE_ENV && !nodeEnvValues.includes(String(NODE_ENV)))
    notify("NODE_ENV must be one of [DEV, TEST, PROD]");
  if (PORT && !Number.isInteger(Number(PORT) || PORT < 3000))
    notify("PORT must be an integer >3000");
};

export default format;
