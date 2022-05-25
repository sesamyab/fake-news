export const API_URL = process.env.VERCEL_URL
    ? `https://${process.env.VERCEL_URL}/api`
    : 'http://localhost:3000/api';
export const NEXT_PUBLIC_PRODUCT_URL_TEST = process.env.NEXT_PUBLIC_PRODUCT_URL_TEST;
