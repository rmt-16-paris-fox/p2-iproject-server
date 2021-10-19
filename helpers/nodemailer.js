const nodemailer = require("nodemailer");

let transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "learnwithdamar@gmail.com",
      pass: "Learnwithd4m4r",
    },
});

function sendingEmail (email, name, addedClass) {
    console.log(email);
    let mailOptions = {
        from: 'learnwithdamar@gmail.com',
        to: email,
        subject: "Success Buying Class",
        text: `Hallo ${name}, selamat anda telah berhasil membeli kelas ${addedClass}.\nUntuk kembali belajar, silahkan kembali ke https://news-portal-w3.web.app/login\nSelamat belajar! :)`
    }
    sendSend(mailOptions)
}

function sendSend(mailOptions){
    transporter.sendMail(mailOptions, (err, info) => {
    if (err) {
        console.log(err)
    } else {
        console.log("sukses");
        console.log(info.response);
    }
}) 
}

module.exports = sendingEmail