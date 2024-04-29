// server.js

const express = require("express");
const nodemailer = require("nodemailer");
const bodyParser = require("body-parser");
const cors = require('cors');

const app = express();
const port = 5004; // Or any other port you prefer

app.use(bodyParser.json());

// Use CORS middleware
app.use(cors());

app.post("/send-email", (req, res) => {
  const { subject, text } = req.body;

  // Create a Nodemailer transporter
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "amancheema.realtorcanada@gmail.com",
      pass: "pwwkqaeajgbpsoya",
    },
  });

  // Email options
  const mailOptions = {
    from: "amancheema.realtorcanada@gmail.com",
    to: "manpreetsran3600@gmail.com",
    subject,
    text,
  };

  // Send email
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error(error);
      res.status(500).send("Error sending email");
    } else {
      console.log("Email sent: " + info.response);
      res.send("Email sent successfully");
    }
  });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
