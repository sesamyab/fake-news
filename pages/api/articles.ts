// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';

import { find } from '../../repositories/articles';

type Data = {};

export default function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
    const limit = Number(req.query.limit);
    const offset = Number(req.query.offset);

    res.status(200).json(find({ offset, limit }));
}
