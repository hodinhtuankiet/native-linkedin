import express from "express";

const Router = express.Router();
import { userController } from "../../controllers/userController.js";
Router.route("/:userId").get(userController.findIdByProfile);
Router.route("/:userId").put(userController.userDescription);
export const userProfile = Router;
