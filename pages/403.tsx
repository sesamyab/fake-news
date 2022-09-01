import React, { FC } from 'react';
import { GetServerSideProps } from 'next';
import { Layout } from '../components';

// TODO - also return 403 header... maybe should be 401

export const getServerSideProps: GetServerSideProps = async ({ req, res }) => {
    res.statusCode = 401;
    return { props: {} };
};

const AccessDenied: FC = () => {
    return (
        <Layout>
            <h1>Lacking BasicAuth credentials</h1>
        </Layout>
    );
};

export default AccessDenied;
