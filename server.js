const express = require("express");
var cors = require("cors");

const mongoose = require("mongoose");
const routes = require("./routes");
const app = express();
require("dotenv").config();
const PORT = process.env.PORT || 3001;

console.log(PORT)

// const apiRoutes = require("./routes/index");

// Define middleware here
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
// Add routes, both API and view
app.use(routes);


// // Use apiRoutes
// app.use("/api", apiRoutes);


// Error handling
app.use(function(err, req, res, next) {
  if (err.name === "UnauthorizedError") {
    // Send the error rather than to show it on the console
    res.status(401).send(err);
  } else {
    next(err);
  }
});

// Send every request to the React app
// Define any API routes before this runs
// app.get("*", function(req, res) {
//   res.sendFile(path.join(__dirname, "./client/index.html"));
// });


// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://user:password1@ds047146.mlab.com:47146/heroku_c83jk5wq");

// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
