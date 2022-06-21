import React from 'react';
import Script from 'next/script';
import Head from 'next/head';

import { NEXT_PUBLIC_PRODUCT_URL_TEST, NEXT_PUBLIC_WEB_COMPONENT_BASE_URL } from '../../constants';

interface Props {
    article: Article;
}

function AnnoyingButton({ article }: Props) {
    const { content, price, description, image, title, slug } = article;

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
                lock-mode="signedUrl"
                item-src={`${NEXT_PUBLIC_PRODUCT_URL_TEST}${slug}`}
                pass={`${NEXT_PUBLIC_PRODUCT_URL_TEST}subscription`}
            >
                <div slot="content" dangerouslySetInnerHTML={{ __html: content }} />
            </sesamy-content-container>
            <sesamy-button-container imageSrc={image} description={description}>
                <sesamy-button
                    text="Subscribe"
                    price={49}
                    currency="SEK"
                    item-src={`${NEXT_PUBLIC_PRODUCT_URL_TEST}subscription`}
                />

                <div>Or...</div>

                <sesamy-button
                    text="Buy For"
                    price={price}
                    currency="SEK"
                    item-src={`${NEXT_PUBLIC_PRODUCT_URL_TEST}${slug}`}
                    pass={`${NEXT_PUBLIC_PRODUCT_URL_TEST}subscription`}
                />
            </sesamy-button-container>
            <Script
                defer
                src={`${NEXT_PUBLIC_WEB_COMPONENT_BASE_URL}/sesamy-content-container.min.js`}
            />
            <Script
                defer
                src={`${NEXT_PUBLIC_WEB_COMPONENT_BASE_URL}/sesamy-button-container.min.js`}
            />
            <Script defer src={`${NEXT_PUBLIC_WEB_COMPONENT_BASE_URL}/sesamy-button.min.js`} />
        </div>
    );
}

export default AnnoyingButton;
