import nodemailer from "nodemailer";
const registerUser = async (req, res) => {

  const { email, verificationCode, otp } = req.body;

  console.log("req.body: ", req.body);

  // Create a transporter object using SMTP transport
  let transporter = nodemailer.createTransport({
    service: "Gmail",
    auth: {
      user: "sonu.mondal.2027@gmail.com",
      pass: "olpu rpqo rdcr gjdd",
    },
  });

  console.log("transporter: ", transporter);

  // Setup email data
  let mailOptions = {
    from: "sonu.mondal.2027@gmail.com",
    to: email,
    subject: "Email Verification Code",
    text: `Your verification code is: ${verificationCode}`,
  };

  console.log("mailOptions: ", mailOptions);

  try {
    // Send mail with defined transport object
    await transporter.sendMail(mailOptions);
    res.send("Email sent successfully!");
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).send("Error sending email");
  }
};

export { registerUser };
