const nodemailer = require('nodemailer');


let transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: '',
    pass: '',
  },
  tls: {
    rejectUnauthorized: false
  }
});


let info =  transporter.sendMail({
  from: 'chinwedorcas@gmail.com', 
  to: 'tobadesola@gmail.com', 
  subject: 'Test Email', 
  text: 'This is a test email,iam learning something new,this was send from vscode using nodemailer,i can teach you if you want', 
});

console.log('Message sent: %s', info.messageId);

let mailOptions = {
    from: 'chinwedorcas@gmail.com',
    to: 'tobadesola@gmail.com',
    subject: 'Test Email',
    text: 'This is a test email sent from Node.js using Nodemailer This is a test email,iam learning something new,this was send from vscode using nodemailer,i can teach you if you want'
  };
  

transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });
  

