import React, { FC } from 'react';
import { GetStaticProps } from 'next';

import { find } from '../repositories/articles';
import SpotlightArticle from '../components/SpotlightArticle/SpotlightArticle';
import { Layout, ArticleList } from '../components';
import styles from './index.module.css';

interface Props {
    articles: Article[];
}

const HomePage: FC<Props> = ({ articles }) => {
    return (
        <Layout>
            <SpotlightArticle article={articles[0]} />
            <div className={styles.articlesWrapper}>
                <ArticleList articles={articles} />
            </div>
        </Layout>
    );
};

export const getStaticProps: GetStaticProps = async () => {
    const articles = find();

    return {
        props: {
            articles,
        },
    };
};

export default HomePage;
