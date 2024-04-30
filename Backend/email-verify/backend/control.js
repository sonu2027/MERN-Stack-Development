import nodemailer from "nodemailer";
import twilio from "twilio";
const registerUser = async (req, res) => {
  const { email, phonesms, whatsapp, verificationCode } = req.body;

  console.log("req.body: ", req.body);

  if (email) {
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
  } else if (phonesms) {
    // This is for twilio which is paid
    // Your AccountSID and Auth Token from console.twilio.com
    // const accountSid = process.env.ACCOUNT_SID;
    // const authToken = process.env.AUTH_TOKEN;

    // const client = require("twilio")(accountSid, authToken);
    // const client = twilio(accountSid, authToken);

    // client.messages
    //   .create({
    //     body: `Your verification code is: ${verificationCode}`,
    //     from: "+12184322556",
    //     to: "+919038076220",
    //   })
    //   .then((message) => console.log("message.sid", message.sid));

    const url = "https://inteltech.p.rapidapi.com/send.php";
    const options = {
      method: "POST",
      headers: {
        "content-type": "application/x-www-form-urlencoded",
        "X-RapidAPI-Key": "c94e65b5a8msh879587de0e95a27p1451e8jsnaf738002e9df",
        "X-RapidAPI-Host": "inteltech.p.rapidapi.com",
      },
      body: new URLSearchParams({
        sms: "+918620862136",
        message: "Test message here.",
        // senderid: "MyCompany",
        // schedule: "1377959755",
        // return: "http://yourwebsite.com",
        key: "1B490066-EA03-E39A-A18C-C4868E45CFAE",
        username: "temp-idk-test-dynamic",
      }),
    };

    try {
      const response = await fetch(url, options);
      console.log("response: ", response);
      const result = await response.text();
      console.log("result: ", result);
    } catch (error) {
      console.error(error);
    }
  } else {
  }
};

export { registerUser };
