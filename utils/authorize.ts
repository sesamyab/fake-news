import { verify, createPublicKey, KeyObject } from 'crypto';
import jwkToPem from 'jwk-to-pem';

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
    if (!signature) {
        throw new Error('Signature not valid');
    }

    if (!verify('RSA-SHA256', Buffer.from(url), publicKey, Buffer.from(decodeURIComponent(signature), 'base64'))) {
        throw new Error('Signature not valid');
    }
}

async function verifyArticleOrPass(signedUrl: string, permissions: string[]) {
    const url = new URL(signedUrl);

    // Ignore domain to make testing easier
    if (!permissions.some((permission) => permission.includes(url.pathname))) {
        throw new Error('No matching permission');
    }
}

export async function authorize(signedUrl: string, permissions: string[]) {
    await verifySignature(signedUrl);
    await verifyArticleOrPass(signedUrl, permissions);
}
