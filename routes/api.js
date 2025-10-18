import express from "express"
import * as authController from "../contoller/authController.js"

const api = express.Router();

api.post("/register", authController.register);
api.post("/login", authController.login);

export default api
