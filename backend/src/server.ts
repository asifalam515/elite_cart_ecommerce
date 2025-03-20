import { Request, Response, Application } from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import express from "express";
const app = express();
dotenv.config({ path: "./.env" });
const port = 3000;

app.get("/", (req: Request, res: Response) => {
  res.send("Hello World!");
});
async function main() {
  await mongoose.connect(process.env.DB_URI as string);
}
main().catch((err) => console.log(err));
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
