import React, { FC } from 'react';
import Script from 'next/script';

import { Layout } from '../components';

const SubscriptionPage: FC = () => {
    return (
        <Layout>
            <sesamy-profile></sesamy-profile>
            <sesamy-entitlements></sesamy-entitlements>
            <Script
                defer
                src="https://assets.sesamy.dev/scripts/checkout-button-markus/sesamy-profile.min.js"
            />
            <Script
                defer
                src="https://assets.sesamy.dev/scripts/checkout-button-markus/sesamy-entitlements.min.js"
            />
        </Layout>
    );
};

export default SubscriptionPage;
