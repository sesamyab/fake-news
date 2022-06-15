import React, { useEffect } from 'react';
import Script from 'next/script';
import Head from 'next/head';

import { NEXT_PUBLIC_PRODUCT_URL_TEST } from '../../constants';

interface Props {
    article: Article;
}

interface SesamyContentContainerProps
    extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> {
    gradient: string;
}

interface SesamyButtonContainerProps
    extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> {
    imageSrc: string;
    description: string;
}

interface SesamyButtonProps
    extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> {
    text: string;
    price: number;
    currency: string;
}

declare global {
    namespace JSX {
        interface IntrinsicElements {
            'sesamy-content-container': SesamyContentContainerProps;
            'sesamy-button-container': SesamyButtonContainerProps;
            'sesamy-button': SesamyButtonProps;
        }
    }
}

function getCookie(cName: string): string {
    const name = `${cName}=`;
    const cDecoded = decodeURIComponent(document.cookie);
    const cArr = cDecoded.split('; ');
    let res;
    cArr.forEach((val) => {
        if (val.indexOf(name) === 0) res = val.substring(name.length);
    });
    return res || '';
}

function setCookie(cName: string, value: string): void {
    let cookie = `${cName}=${value};`;

    document.cookie = cookie;
}

async function getEntitlements() {
    const token = getCookie('sesamy-auth');

    if (token.length) {
        const response = await fetch('https://api.sesamy.com/vault/entitlements?type=article', {
            headers: {
                authorization: `Bearer ${token}`,
            },
        });

        if (response.ok) {
            const body = await response.json();
            setCookie('sesamy-entitlements', JSON.stringify(body));
        }
    }
}

function AnnoyingButton({ article }: Props) {
    const { content, price, description, image, title } = article;

    useEffect(() => {
        getEntitlements();
    });

    return (
        <div>
            <Head>
                <meta property="sesamy:price" content={String(price)} />
                <meta property="sesamy:currency" content="SEK" />
                <meta property="sesamy:description" content={description} />
                <meta property="sesamy:image" content={image} />
                <meta property="sesamy:title" content={title} />
            </Head>
            <sesamy-content-container
                show-child-count="0"
                gradient="false"
                item-src={NEXT_PUBLIC_PRODUCT_URL_TEST}
            >
                <div dangerouslySetInnerHTML={{ __html: content }} />
            </sesamy-content-container>
            <sesamy-button-container imageSrc={image} description={description}>
                <sesamy-button
                    text="Buy For"
                    price={price}
                    currency="SEK"
                    item-src={NEXT_PUBLIC_PRODUCT_URL_TEST}
                />
            </sesamy-button-container>
            <Script
                defer
                src="https://assets.sesamy.dev/scripts/checkout-button/sesamy-content-container.min.js"
            />
            <Script
                defer
                src="https://assets.sesamy.dev/scripts/checkout-button/sesamy-button-container.min.js"
            />
            <Script
                defer
                src="https://assets.sesamy.dev/scripts/checkout-button/sesamy-button.min.js"
            />
        </div>
    );
}

export default AnnoyingButton;
