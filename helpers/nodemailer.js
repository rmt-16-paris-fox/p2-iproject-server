const nodemailer = require("nodemailer");
const web = process.env.WEB

let transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "learnwithdamar@gmail.com",
      pass: process.env.PASSWORD_EMAIL,
    },
});

function sendEmail(mailOptions){
    transporter.sendMail(mailOptions, (err, info) => {
        if (err) {
            console.log(err)
        } else {
            console.log("sukses");
            console.log(info.response);
        }
    }) 
}

function sendingEmailSuccessAdd (email, name, addedClass) {
    let mailOptions = {
        from: 'learnwithdamar@gmail.com',
        to: email,
        subject: "Success Buying Class",
        text: `Hallo ${name}, selamat anda telah berhasil membeli kelas ${addedClass}. Untuk kembali belajar, silahkan kembali ke ${web} belajar! :)`
    }
    sendEmail(mailOptions)
}

function verifyEmailAccount (email, name, verifyCode) {
    let mailOptions = {
        from: 'learnwithdamar@gmail.com',
        to: email,
        subject: "Verify Email Account",
        text: `Hallo ${name}, silahkan Log In ke link ${web}/verification/${verifyCode} untuk memverifikasi dan mengaktifkan akun anda. Terimakasih :)`
    }
    sendEmail(mailOptions)
}

module.exports = { sendingEmailSuccessAdd, verifyEmailAccount }