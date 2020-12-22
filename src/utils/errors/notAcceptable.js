const NotAcceptable = new Error("invalid input");
NotAcceptable.status = 406;

export default NotAcceptable;
