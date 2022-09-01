import React, { FC } from 'react';

import { Layout } from '../components';

// TODO - also return 403 header... maybe should be 401

const AccessDenied: FC = () => {
    return (
        <Layout>
            <h1>Lacking BasicAuth credentials</h1>
        </Layout>
    );
};

export default AccessDenied;
