// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';

type Data = {};

export default function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
    const articles = require('../../db/articles.json');
    const article = articles.find(
        (a: any) => a.slug === req.query.id || a.id === parseInt(req.query.id as string)
    );
    if (!article) {
        res.status(404).json({ message: 'Not found' });
    } else {
        res.status(200).json(article);
    }
}
