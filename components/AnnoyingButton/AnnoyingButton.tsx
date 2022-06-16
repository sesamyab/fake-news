import React from 'react';
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

function AnnoyingButton({ article }: Props) {
    const { content, price, description, image, title } = article;

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
                show-childs-count="0"
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
                src="https://assets.sesamy.dev/scripts/checkout-button-markus/sesamy-content-container.min.js"
            />
            <Script
                defer
                src="https://assets.sesamy.dev/scripts/checkout-button-markus/sesamy-button-container.min.js"
            />
            <Script
                defer
                src="https://assets.sesamy.dev/scripts/checkout-button-markus/sesamy-button.min.js"
            />
        </div>
    );
}

export default AnnoyingButton;
