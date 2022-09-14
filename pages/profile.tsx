import React, { FC } from 'react';
import Script from 'next/script';

import { Layout } from '../components';
import { webComponentBaseUrl } from '../constants';

const SubscriptionPage: FC = () => {
    return (
        <Layout>
            <div style={{ maxWidth: '850px', margin: 'auto' }}>
                <sesamy-profile manage-subscriptions></sesamy-profile>
                <sesamy-entitlements></sesamy-entitlements>
                <sesamy-transactions></sesamy-transactions>
            </div>
            <Script defer src={`${webComponentBaseUrl}/sesamy-bundle.min.js`} />
        </Layout>
    );
};

export default SubscriptionPage;
