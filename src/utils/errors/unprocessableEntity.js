const UnprocessableEntity = new Error("unprocessable entity");
UnprocessableEntity.status = 422;

export default UnprocessableEntity;
