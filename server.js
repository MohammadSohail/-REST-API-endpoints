/**
 * Use Express-mongodb to create some REST API endpoints to perform these actions: (library management system)
 * 
there will be two types of users in the application (librarian, student)

librarian will be able to insert new book records (bookName, author, genre, releaseDate, bookImage)
librarian can update, delete, activate and deactivate any book data

registered students can request for a single book or all books

 */

const express = require("express");
const env = require("dotenv");
const app = express();
const mongoose = require("mongoose");

const authRoutes = require("./routes/auth");
const bookRoutes = require("./routes/book");
const cartRoutes = require("./routes/cart");

env.config();

//mongodb+srv://root:<password>@cluster0.cus53.mongodb.net/<dbname>?retryWrites=true&w=majority

mongoose
  .connect(
    `mongodb+srv://${process.env.MONGO_DB_USER}:${process.env.MONGO_DB_PASSWORD}@cluster0.cus53.mongodb.net/${process.env.MONGO_DB_DATABASE}?retryWrites=true&w=majority`,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    }
  )
  .then(() => {
    console.log("Database connected");
  });

app.use(express.json());

// app.get("/", (req, res) => {
//   res.status(200).json({
//     message: "Hello from server",
//   });
// });

// app.post("/data", (req, res) => {
//   res.status(200).json({
//     message: req.body,
//   });
// });

app.use("/api", authRoutes);
app.use("/api", bookRoutes);
app.use("/api", cartRoutes);

app.listen(process.env.PORT, () => {
  console.log(`server is running on port ${process.env.PORT}`);
});
