const express = require("express");
const { authGuard } = require("../middleware/auth");
const {
  createPost,
  getAllPost,
  updatePost,
  deletePost,
  singlePost,
} = require("../controllers/post.controllers");
const { likeAPost, dislikeAPost } = require("../controllers/like.controllers");
const {
  createComment,
  deleteComment,
  editComment,
  getAllCommentsForAPost,
} = require("../controllers/comments.controllers");
const upload = require("../middleware/fileUpload");

const postRouter = express.Router();

postRouter.post("/", authGuard,upload.single('thumbnail'), createPost);
postRouter.get("/", getAllPost);
postRouter.get("/:id", singlePost);
postRouter.put("/:id", authGuard,upload.single('thumbnail'), updatePost);
postRouter.delete("/:id", authGuard, deletePost);
postRouter.post("/like", authGuard, likeAPost);
postRouter.post("/dislike", authGuard, dislikeAPost);
postRouter.get("/:postId/comments", getAllCommentsForAPost);
postRouter.post("/:postId/comments", authGuard, createComment);
postRouter.put("/:postId/comments/:commentId", authGuard, editComment);
postRouter.delete("/:postId/comments/:commentId", authGuard, deleteComment);

module.exports = postRouter;
