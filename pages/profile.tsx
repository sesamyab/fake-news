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
                src="https://assets.sesamy.dev/scripts/web-components/sesamy-bundle.min.js"
            />
        </Layout>
    );
};

export default SubscriptionPage;
