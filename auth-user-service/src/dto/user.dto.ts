import Joi from "joi";

export const userDto = Joi.object({
  username: Joi.string().min(3).max(20),
  name: Joi.string().min(3).max(20).required(),
  age: Joi.date().required(),
  email: Joi.string().email().required(),
  password: Joi.string().min(6).required(),
  profilePicture: Joi.string().required(),
  phoneNumber: Joi.string().required(),
  accountNumber: Joi.string(),
  accountType: Joi.string(),
  balance: Joi.string(),
  role: Joi.string(),
  permissions: Joi.array().items(Joi.string().min(1)),
  lastLogin: Joi.date(),
  status: Joi.string(),
  address: Joi.string(),
  preferences: Joi.string(),
});
