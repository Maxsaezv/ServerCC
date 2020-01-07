var express = require("express");
const mongoose = require("mongoose");
var cors = require("cors");
var createError = require("http-errors");
const bodyParser = require("body-parser");
const passport = require("passport");

const users = require("./routes/api/users")



//require("custom-env").env(true);

// if (process.env.NODE_ENV === "local") {
//   // Import Mongoose
//   let mongoose = require("mongoose");
//   // Connect to Mongoose and set connection variable
//   mongoose.connect("mongodb://localhost/colocoloapi")
//   .then(() => {
//     console.log("connected to DB");
//     // var db = mongoose.connection;
//   })
//   .catch(err => {
//     console.log("Not connected to DB, err: ", err)
//   })
  
// } else {
//   // db instance connection
//   require("./db");
// }




// DB Config
const db = require("./config/keys").mongoURI;

// Connect to MongoDB
mongoose
  .connect(
    db,
    { useNewUrlParser: true }
  )
  .then(() => console.log("MongoDB successfully connected"))
  .catch(err => console.log(err));

// initialize the app
var app = express();

//CORS
app.use(cors());

// Import Body parser
app.use(
  bodyParser.urlencoded({
    extended: true
  })
);
app.use(bodyParser.json());

// // Passport middleware
app.use(passport.initialize());

// // Passport config
require("./config/passport")(passport);

  
  const port = process.env.PORT || 5000; // process.env.port is Heroku's port if you choose to deploy the app there
  app.listen(port, () => console.log(`Server up and running on port ${port} !`));

// // set server port
// var port = process.env.PORT || 8080;

// import routes
let routes = require("./routes");

app.use("/api/users", users);

app.use("/api", routes);

app.get("/", (req, res) => res.send("Hello World!"));

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  console.log(err);
  
  res.json({
    message: err.message,
    error: err
  });
  //res.render("error");
});

// app.listen(port, function() {
//   console.log(`Running on port ${port}`);
// });
