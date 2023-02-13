import express from "express";
import morgan from "morgan";
import cors from "cors";
import emailRouter from "./Routes/emailRoutes.js";

const app = express();

app.use(cors("*"));
app.use(morgan("dev"));
app.use(express.static("public"));
app.use(express.json());

//Routing
app.use("/api/allEmails", emailRouter);

export default app;
