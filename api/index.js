import express from "express";
import bodyParser from "body-parser";
import crypto from "crypto";
import { Authenticate_APIs } from "./route/authenticate/index.js";
import { USER_APIs } from "./route/users/index.js";
import { CONNECTION_APIs } from "./route/connection/index.js";
import { POST_APIs } from "./route/post/index.js";
import { MESSAGE_APIs } from "./route/message/index.js";
import nodemailer from "nodemailer";
import mongoose from "./config/mongodb.js";
import jwt from "jsonwebtoken";
import cors from "cors";
import "dotenv/config";
import passport from "./node_modules/passports/passports.js";
import { Strategy as LocalStrategy } from "passport-local";
import mime from "mime-types";

const app = express();
const port = 3000;

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use("/", Authenticate_APIs);

app.use("/", USER_APIs);

app.use("/", CONNECTION_APIs);

app.use("/", POST_APIs);

app.use("/", MESSAGE_APIs);

app.get("/", (req, res) => {
  console.log("hello world");
  res.send("hello world");
});

app.listen(port, () => {
  console.log(`server is running on port ${process.env.NAME_TUI}`);
});
