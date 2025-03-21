import { Request, Response, Application } from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import express from "express";
import { router } from "./app/user/user.route";
import bodyParser from "body-parser";
export const app = express();
app.use(bodyParser.json());
app.use(express.json());
dotenv.config({ path: "./.env" });
const port = 5000;
app.use("/api/users", router);
app.get("/", (req: Request, res: Response) => {
  res.send("Hello From Elite Cart Backend");
});
async function main() {
  try {
    await mongoose.connect(process.env.DB_URI as string);
    console.log("Database connected");
  } catch (err) {
    console.error("Database connection error:", err);
  }
}

main().catch((err) => console.log(err));
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
