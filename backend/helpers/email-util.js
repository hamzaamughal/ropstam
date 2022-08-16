const nodeMailer = require('nodemailer');


const sendPasswordMail = async (email, password) => {
  return new Promise((resolve, reject) => {
    try {

      const transporter = nodeMailer.createTransport({
        service: 'gmail',
        auth: {
          user: 'bhartisabhi@gmail.com',
          pass: 'zwczasktbsrphefj',
        },
      });
      const mailOptions = {
        from: 'Ropstam Task Project <',
        to: email,
        subject: 'Password',
        text: `Your password is ${password}`,
      };
      transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
          reject(error);
        }
        resolve(info);
      });
    } catch (error) {
      reject(error);
    }
  })
}

module.exports = {
  sendPasswordMail,
}