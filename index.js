const express = require("express");
const mongoose = require("mongoose");
mongoose.connect(
  "mongodb+srv://PlantUser:plantuser123@cluster0.lqytz.mongodb.net/myFirstDatabase?retryWrites=true&w=majority/myapp"
);
const app = express();

const Port = process.env.port || 5000;

const connection = mongoose.connection;
connection.once("open", () => {
  console.log("MongoDb connected");
});
//middleware
app.use(express.json());
const userRoute = require("./routes/user");
app.use("/user", userRoute);
app.route("/").get((req, res) => res.json("your first rest l'api"));

app.listen(Port, () => console.log(`your server is running on port ${Port}`));
