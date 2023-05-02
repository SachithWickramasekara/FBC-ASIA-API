import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import EmailSender from "./SendEmail.js";
import SubscribeEmailSender from "./SubscribeEmail.js";

dotenv.config();
const app = express();
app.use(express.json());
app.use(cors({ origin: `${process.env.CLIENT_URL}` }));
const port = process.env.PORT || 5000;

//****** SEND API REQUESTS TO THE ROUTES ******//
app.post("/connect", async (req, res) => {
  try {
    const { firstName, lastName, message } = req.body;
    EmailSender({ firstName, lastName, message });
    res.json({ msg: "Your message has been sent successfully ✅" });
  } catch (error) {
    res.status(404).json({ msg: "Error ❌" });
  }
});

app.post("/subscribe", async (req, res) => {
  try {
    const { email } = req.body;
    SubscribeEmailSender({ email });
    res.json({ msg: "You have successfully subscribed ✅" });
  } catch (error) {
    res.status(404).json({ msg: "Error ❌" });
  }
});

app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});
