import React, { FC } from 'react';

import { Layout, ArticleList } from '../components';
import { API_URL } from '../constants';
import styles from './index.module.css';

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

export async function getStaticProps() {
    const res = await fetch(`${API_URL}/articles`);
    const articles = await res.json();

    return {
        props: {
            articles,
        },
    };
}

export default HomePage;
