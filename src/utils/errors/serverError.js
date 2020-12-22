const ServerError = new Error("server error");
ServerError.status = 500;

export default ServerError;
