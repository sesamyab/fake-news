// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';

import { findById } from '../../../repositories/articles';

type Data = {};

export default function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
    const article = findById(req.query.id as string);
    if (!article) {
        res.status(404).json({ message: 'Not found' });
    } else {
        res.status(200).json(article);
    }
}
