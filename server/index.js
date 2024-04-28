const express = require("express");
const { db_connction } = require("./config/db_connection");
const { errorHandler } = require("./middleware/errorHandler");
const authRouter = require("./routes/auth.routes");
const postRouter = require("./routes/post.routes");
const categoryRouter = require("./routes/category.routes");
const bookMarkRouter = require("./routes/bookmark.routes");
const cors = require("cors");
const userRouter = require("./routes/user.routes");
const memRouter=require('./routes/membership.routes')
const { cloudinary_connection } = require("./config/cloudinary_connection");
require("dotenv").config();

const app = express();

db_connction();
cloudinary_connection()
app.use(cors());
app.use("/uploads", express.static("upload"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/v1/auth", authRouter);
app.use("/api/v1/post", postRouter);
app.use("/api/v1/category", categoryRouter);
app.use("/api/v1/bookmark", bookMarkRouter);
app.use("/api/v1/user", userRouter);
app.use('/api/v1/membership',memRouter)


app.use(errorHandler);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`server listen on port no. ${PORT}`);
});
