import { Router } from "express";
import { getAllEmails, addEmail } from "../Models/emails.js";

const router = Router();

router.get("/", async function (req, res) {
  const allEmails = await getAllEmails();
  res.status(200).json(allEmails);
});

router.post("/", async function (req, res) {
  const email = await addEmail(req.body);
  res.json({
    success: true,
    payload: email,
  });
});

export default router;
