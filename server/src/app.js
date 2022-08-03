import express from "express";
import cookieParser from "cookie-parser";
import indexRouter from "./routes/index.js";
import dotenv from "dotenv";

dotenv.config();
var app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use("/", indexRouter);

app.listen(process.env.PORT || 3000);
export default app;
