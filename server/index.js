const express = require("express");
const { db_connction } = require("./config/db_connection");
const { errorHandler } = require("./middleware/errorHandler");
const authRouter = require("./routes/auth.routes");
const postRouter = require("./routes/post.routes");
const upload = require("./middleware/fileUpload");
const path = require("path");
const categoryRouter = require("./routes/category.routes");
const bookMarkRouter = require("./routes/bookmark.routes");
require("dotenv").config();

const app = express();

db_connction();
app.use(upload.none());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/v1/auth", authRouter);
app.use("/api/v1/post", postRouter);
app.use("/api/v1/category", categoryRouter);
app.use('/api/v1/bookMark',bookMarkRouter)

// app.use("/uploads", express.static(path.join(__dirname, "/uploads")));
app.use(errorHandler);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`server listen on port no. ${PORT}`);
});
