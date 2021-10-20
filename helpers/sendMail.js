var nodemailer = require('nodemailer');
const email = process.env.EMAIL_SENDER;
const password = process.env.PASSWORD_EMAIL_SENDER;

function sendEmail(Email, param){
    var transporter = nodemailer.createTransport({
        service: 'outlook',
        auth: {
          user: email,
          pass: password
        }
      });
      
      var mailOptions = {
        from: email,
        to: `${Email}`,
        subject: 'New Footbal Match Watchlist',
        text: `${param}`
      };
      
      transporter.sendMail(mailOptions, function(error, info){
        if (error) {
          console.log(error);
        } else {
          console.log('Email sent: ' + info.response);
        }
      });
}

// console.log(sendEmail('wkwkwkwkwk'))
module.exports = sendEmail