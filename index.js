const express = require("express");
const mongoose = require("mongoose");
const cookieSession = require("cookie-session");
const passport = require("passport");
const bodyParser = require("body-parser");
const keys = require("./config/keys");
require("./models/User");
require("./models/Survey");
require("./services/passport");



mongoose.connect(keys.mongoURI);

const app = express();

//All the middleware needs to be wired with "app.use"

app.use(bodyParser.json());
app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [keys.cookieKey]
  })
);

app.use(passport.initialize());
app.use(passport.session());

//both these require statements return their respective app functions
require("./routes/authRoutes")(app);
require("./routes/billingRoutes")(app);
require("./routes/surveyRoutes")(app);

//getting app ready for production environment
if (process.env.NODE_ENV === "production") {
  //Express will serve up production assets
  // like our main.js file, or main.css file
  //
  app.use(express.static("client/build"));
  // Express will serve up the index.html file
  //  if it doesnt recognize the route
  // All other request are sent to this route "client/build/index.html"
  const path = require("path");
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

const PORT = process.env.PORT || 5000;
app.listen(PORT);
