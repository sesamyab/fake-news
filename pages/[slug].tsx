import React, { FC } from 'react';
import { GetStaticProps, GetStaticPaths } from 'next';
import Image from 'next/image';

import { find, findById } from '../repositories/articles';
import styles from '../styles/Article.module.css';
import { Layout } from '../components';
import dateFormatter from '../utils/dateFormatter';
import Article from '../components/Article/Article';
import AuthorCard from '../components/AuthorCard/AuthorCard';
import ArticleSpecsButtons from '../components/ArticleSpecsButtons/ArticleSpecsButtons';

interface Props {
    article: Article | null;
}

const ArticlePage: FC<Props> = ({ article }) => {
    if (!article) {
        return (
            <Layout>
                <div className={styles.articlePage}>
                    <p>Article not found.</p>
                </div>
            </Layout>
        );
    }

    return (
        <Layout>
            <div className={styles.articlePage}>
                <p className={styles.topic}>{article.title}</p>
                <h1 className={styles.title}>{article.title}</h1>
                <div style={{ width: '100%', height: 450, position: 'relative' }}>
                    <Image
                        alt={article.title}
                        src={article.image}
                        layout="fill"
                        objectFit="inherit"
                    />
                </div>
                <div className={styles.excerpt}>{article.excerpt}</div>
                <hr
                    style={{
                        width: '800px',
                        maxWidth: '80%',
                        height: '1px',
                        color: '#ccc',
                        border: 'none',
                        backgroundColor: '#ccc',
                    }}
                />
                <AuthorCard
                    name={article.author}
                    date={dateFormatter(article.date)}
                    description={article.description}
                    image={article.image}
                />
                <ArticleSpecsButtons content={article.content} />

                <div className={styles.articleContent}>
                    <Article article={article} />
                </div>
            </div>
        </Layout>
    );
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
    if (!params) {
        return {
            notFound: true,
        };
    }

    const article = findById(params.slug as string);

    if (!article) {
        return {
            notFound: true,
        };
    }

    return {
        props: { article },
    };
};

export const getStaticPaths: GetStaticPaths = async () => {
    const articles = find();

    const paths = articles.map((article) => ({
        params: { slug: article.slug },
    }));

    return {
        paths,
        fallback: false,
    };
};

export default ArticlePage;
