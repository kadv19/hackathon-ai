import express, { Router } from "express";
import { createCourse } from "../Controllers/process-controller.js";


export const processRoute = express.Router()

processRoute.route("/create-course").post(createCourse);
