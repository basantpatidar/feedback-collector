const sendgrid = require("sendgrid");
const helper = sendgrid.mail;
const keys = require("../config/keys");

//class are also one type of object so here "Mailer" & "helper" class are a object
class Mailer extends helper.Mail {}
module.exports = Mailer;
