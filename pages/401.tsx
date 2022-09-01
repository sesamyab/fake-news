import React, { FC } from 'react';
import { GetServerSideProps } from 'next';
import { Layout } from '../components';
import styles from '../styles/401.module.css';

export const getServerSideProps: GetServerSideProps = async ({ req, res }) => {
    res.statusCode = 401;
    return { props: {} };
};

const AccessDenied: FC = () => {
    return (
        <Layout>
            <div className={styles.page}>
                <h1 className={styles.title}>Auth credentials lacking</h1>
            </div>
        </Layout>
    );
};

export default AccessDenied;
