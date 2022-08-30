import React, { FC } from 'react';
import Head from 'next/head';
import Script from 'next/script';

import { Layout } from '../components';
import { webComponentBaseUrl } from '../constants';

interface Props {
    articles: Article[];
}

const image = 'https://kvartal.se/wp-content/uploads/2022/06/1920x1000.jpg';
const description = 'Subscribe to all fake news';
const price = 49;

const SubscriptionPage: FC<Props> = () => {
    return (
        <Layout>
            <Head>
                <meta property="sesamy:price" content={String(price)} />
                <meta property="sesamy:currency" content="SEK" />
                <meta property="sesamy:purchase-type" content="RECURRING" />
                <meta property="sesamy:product-type" content="PASS" />
                <meta property="sesamy:description" content={description} />
                <meta property="sesamy:image" content={image} />
                <meta property="sesamy:title" content="Subscription" />
            </Head>
            <sesamy-content-container show-childs-count="0">
                <div slot="preview">Subscribe to get the latest fake news!</div>
                <div slot="content">Thanks for being a subscriber!</div>
            </sesamy-content-container>
            <sesamy-button-container imageSrc={image} description={description}>
                <sesamy-button text="Buy For" price={price} currency="SEK" />
            </sesamy-button-container>
            <Script defer src={`${webComponentBaseUrl}/sesamy-bundle.min.js`} />
        </Layout>
    );
};

export default SubscriptionPage;
