import type { NextApiRequest, NextApiResponse } from 'next';

import { findById } from '../../../repositories/articles';
import { authorize } from '../../../utils/authorize';

type Data = {};

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
    if (typeof req.query.slug !== 'string') {
        return new Response('Invalid Request', {
            status: 400,
        });
    }

    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'useragent, x-sesamy-signed-url');

    if (req.method === 'OPTIONS') {
        res.status(200);
        res.setHeader('Allow', 'OPTIONS, GET');
        res.send('');
    } else {
        try {
            await authorize(req.url!, [req.query.slug, 'subscription']);

            const article = findById(req.query.slug);

            res.status(200).send(article?.content || '');
        } catch (err) {
            res.status(403).send('Unauthorized');
        }
    }
}
