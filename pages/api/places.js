import db from "../../DB";

export default async (req, res) => {
  const data = await db.select().table("images");
  res.status(200).json(data);
};
