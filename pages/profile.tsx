import React, { FC } from 'react';
import Script from 'next/script';

import { Layout } from '../components';
import { webComponentBaseUrl } from '../constants';

const SubscriptionPage: FC = () => {
    return (
        <Layout>
            <sesamy-profile></sesamy-profile>
            <sesamy-entitlements></sesamy-entitlements>
            <Script defer src={`${webComponentBaseUrl}/sesamy-bundle.min.js`} />
        </Layout>
    );
};

export default SubscriptionPage;
