import express, { Router } from "express";
import { Signup, Signin } from "../Controllers/auth-controller.js";

export const authRoute = express.Router()

authRoute.route("/signup").post(Signup);
authRoute.route("/signin").post(Signin);