import React, { FC } from 'react';

import { Layout, ArticleList } from '../components';
import { VERCEL_URL } from '../constants';
import styles from './index.module.css';
import { GetStaticProps } from 'next';

interface Props {
    articles: Article[];
}

const HomePage: FC<Props> = ({ articles }) => {
    return (
        <Layout>
            <div className={styles.articlesWrapper}>
                <ArticleList articles={articles} />
            </div>
        </Layout>
    );
};

export const getStaticProps: GetStaticProps = async (context) => {
    const res = await fetch(`${VERCEL_URL}/api/articles`);
    const articles = await res.json();

    return {
        props: {
            articles,
        },
    };
};

export default HomePage;
