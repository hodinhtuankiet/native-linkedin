import express from "express";
import multer from "multer";
import { messageController } from "../../controllers/messageController.js";

const Router = express.Router();
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "files/"); // Chỉ định thư mục đích mong muốn
  },
  filename: function (req, file, cb) {
    // Tạo một tên tệp duy nhất cho tệp được tải lên
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, uniqueSuffix + "-" + file.originalname);
  },
});

const upload = multer({ storage: storage });
// const upload = multer({ dest: "file/" });

Router.route("/").post(
  upload.single("imageFile"),
  messageController.sendMessage
);

Router.route("/:senderId/:recepientId").get(
  messageController.fetchMessageBetweenTwoPeople
);

export const messageRoute = Router;
