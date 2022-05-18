// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import slugify from "slugify";

type Data = {};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const articles = require("../db/articles.json");
  const limit = req.query.limit ?? 20;
  const offset = req.query.offset ?? 0;
  res.status(200).json(articles.slice(offset, limit));
}
