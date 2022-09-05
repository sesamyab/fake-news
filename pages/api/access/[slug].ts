import type { NextApiRequest, NextApiResponse } from 'next';
import { verify, createPublicKey, KeyObject } from 'crypto';
import jwkToPem from 'jwk-to-pem';

import { findById } from '../../../repositories/articles';

type Data = {};

let publicKey: KeyObject;

async function fetchPublicKey() {
    const response = await fetch('https://assets.sesamy.dev/vault-jwks.json');

    if (!response.ok) {
        throw new Error('Failed to fetch public key');
    }

    return response.json();
}

async function getPublicKey() {
    const jwks = await fetchPublicKey();

    const pemKey = jwkToPem(jwks);
    return createPublicKey(pemKey);
}

async function verifySignature(signedUrl: string) {
    if (!publicKey) {
        publicKey = await getPublicKey();
    }

    const [url, signature] = signedUrl.split('&ss=');
    if (!verify('RSA-SHA256', Buffer.from(url), publicKey, Buffer.from(signature, 'base64'))) {
        throw new Error('Signature not valid');
    }
}

async function verifyArticleOrPass(signedUrl: string, permissions: string[]) {
    const url = new URL(signedUrl);

    const slug = url.pathname.slice(1);

    if (!permissions.some((permission) => permission.includes(slug))) {
        throw new Error('No matching permission');
    }
}

async function authorize(req: NextApiRequest, permissions: string[]) {
    const signedUrl = req.headers['x-sesamy-signed-url'];

    if (typeof signedUrl !== 'string') {
        throw new Error('Signed url header required');
    }

    await verifySignature(signedUrl);
    await verifyArticleOrPass(signedUrl, permissions);
}

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
            await authorize(req, [req.query.slug, 'subscription']);

            const article = findById(req.query.slug);

            res.status(200).send(article?.content || '');
        } catch (err) {
            res.status(403).send('Unauthorized');
        }
    }
}
