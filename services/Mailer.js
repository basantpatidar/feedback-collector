const sendgrid = require("sendgrid");
const helper = sendgrid.mail;
const keys = require("../config/keys");

//class are also one type of object so here "Mailer" & "helper" class are a object
class Mailer extends helper.Mail {
  constructor({ subject, recipients }, content) {
    super();

    this.from_email = new helper.Email("no-reply@emaily.com");
    this.subject = subject;
    this.body = new helper.Content("text/html", content);
    this.recipients = this.formatAddresses(recipients);

    this.addContent(this.body);
    this.addClicktracking();
  }
  formatAddresses(recipients) {
    return recipients.map(({ email }) => {
      return new helper.Email(email);
    });
  }
}
module.exports = Mailer;
