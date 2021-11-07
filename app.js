const express = require("express");
const app = express();
const Register = require("./submit");
require("dotenv").config();
require("./conn");
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static("./static"));
app.get("/", (req, res) => {
  res.sendFile("C:/Users/Hp/Desktop/kids-world/static/home.html");
});
app.get("/about", (req, res) => {
  res.sendFile("C:/Users/Hp/Desktop/kids-world/static/about.html");
});
app.get("/contact", (req, res) => {
  res.sendFile("C:/Users/Hp/Desktop/kids-world/static/contact.html");
});
app.post("/contact", async (req, res) => {
  try {
    const registeremployee = new Register({
      firstname: req.body.firstname,
      lastname: req.body.lastname,
      subject: req.body.subject,
    });
    const registered = await registeremployee.save();
    res.status(200).send("submitted successfully");
    // alert("Submitted");
  } catch (error) {
    res.status(404).send("connot be empty");
  }
});
app.listen(5000, (req, res) => {
  console.log("listening");
});
