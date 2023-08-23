import { verify, createPublicKey, KeyObject } from 'crypto';
import jwkToPem from 'jwk-to-pem';
import jwt from 'jsonwebtoken';

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

    console.log('token: ' + JSON.stringify(payload));

    if (!permissions.some((permission) => permission === payload.url)) {
        throw new Error('No matching permission');
    }
}

export async function authorize(signedUrl: string, permissions: string[]) {
    await verifySignature(signedUrl, permissions);
}
