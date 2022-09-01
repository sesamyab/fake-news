import React, { FC } from 'react';

import { Layout } from '../components';

const AccessDenied: FC = () => {
    return (
        <Layout>
            <h1>Lacking BasicAuth credentials</h1>
        </Layout>
    );
};

export default AccessDenied;
