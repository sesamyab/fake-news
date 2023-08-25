import { createPublicKey, KeyObject } from 'crypto';
import jwkToPem from 'jwk-to-pem';
import jwt from 'jsonwebtoken';
import { publicKeyUrl } from '../constants';

let publicKey: KeyObject;

async function fetchPublicKey() {
    const response = await fetch(publicKeyUrl);

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

async function verifySignature(signedUrl: string, permissions: string[]) {
    if (!publicKey) {
        publicKey = await getPublicKey();
    }

    const signedURL = new URL(signedUrl);
    const token = signedURL.searchParams.get('token');
    if (!token) {
        throw new Error('Signature not valid');
    }

    const payload: any = jwt.verify(token, publicKey);

    if (
        !permissions.some((permission) => {
            console.log(payload.url);
            return new URL(permission).pathname === new URL(payload.url).pathname;
        })
    ) {
        throw new Error('No matching permission');
    }
}

export async function authorize(signedUrl: string, permissions: string[]) {
    await verifySignature(signedUrl, permissions);
}
