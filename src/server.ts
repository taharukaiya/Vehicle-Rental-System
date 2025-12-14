import express, { NextFunction, Request, Response } from "express";
import { Pool } from "pg";
import dotenv from "dotenv";
import path from "path";
import config from "./config";

dotenv.config({ path: path.join(process.cwd(), ".env") });

const app = express();
const port = config.port;

app.use(express.json());


app.get("/", (req: Request, res: Response, next: NextFunction) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
