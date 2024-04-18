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

const postRouter = express.Router();

postRouter.post("/", authGuard, createPost);
postRouter.get("/", getAllPost);
postRouter.get('/:id',singlePost);
postRouter.put("/:id", authGuard, updatePost);
postRouter.delete("/:id", authGuard, deletePost);
postRouter.post('/like', authGuard,likeAPost);
postRouter.post('/dislike', authGuard,dislikeAPost);

module.exports = postRouter;
