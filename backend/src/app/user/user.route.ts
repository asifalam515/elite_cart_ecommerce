import express, { Request, Response } from "express";
export const router = express.Router();
router.post("/create-user", async (req: Request, res: Response) => {
  const user = req.body;
});
