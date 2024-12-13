import Joi from "joi";

export const signinDto = Joi.object({
  // username: Joi.string().min(3).max(20),
  name: Joi.string().required(),
  dateOfBirth: Joi.date().required(),
  email: Joi.string().email().required(),
  password: Joi.string().min(6).required(),
  // profilePicture: Joi.string(),
  phoneNumber: Joi.string(),
  // accountNumber: Joi.string(),
  // accountType: Joi.string(),
  // balance: Joi.string(),
  // role: Joi.string(),
  // permissions: Joi.array().items(Joi.string().min(1)),
  // lastLogin: Joi.date(),
  // status: Joi.string(),
  // address: Joi.string(),s
  // preferences: Joi.string(),
});

export const loginDto = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().min(6).required(),
});