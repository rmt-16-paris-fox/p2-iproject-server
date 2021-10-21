let nodemailer = require('nodemailer')

let transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'ikmalamrin123',
    pass: 'Qwerty@123'
  }
})
function sendingEmail( email,username) {
    let mailOptions = {
        from: 'ikmalamrin123',
        to: `${email}`,
        subject: 'Login berhasil',
        text:` anda berhasil Login dengan ${username}`
      }
     sends(mailOptions)   
}
function sends(mailOptions) {
    transporter.sendMail(mailOptions, (err, info) => {
        if(err){
          console.log(err);
        } else {
          console.log(`email berhasil dikirim + ${info.response}`);
        }
      })
      
    
}



module.exports = sendingEmail