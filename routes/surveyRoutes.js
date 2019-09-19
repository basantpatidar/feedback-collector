const mongoose = require("mongoose");
const requireLogin = require("../middlewares/requireLogin");
const requireCredits = require("../middlewares/requireCredits");
const Mailer = require("../services/Mailer");
const surveyTemplate = require("../services/emailTemplates/surveyTemplate");

//getting access to survey model
const Survey = mongoose.model("surveys");

module.exports = app => {
  app.post("api/surveys", requireLogin, requireCredits, (req, res) => {
    const { title, subject, body, recipients } = req.body;

    const servey = new servey({
      title,
      subject,
      body,
      recipients: recipients.split(",").map(email => {
        return {
          email: email.trim()
        };
      }),
      _user: req.user.id,
      dateSent: Date.now()
    });

    //Mailer Configuration
    const mailer = new Mailer(survey, surveyTemplate(survey));
  });
};
