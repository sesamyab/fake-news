import React, { FC } from 'react';
import { GetStaticProps, GetStaticPaths } from 'next';
import Image from 'next/image';

import styles from '../styles/Article.module.css';
import { Layout } from '../components';
import dateFormatter from '../utils/dateFormatter';
import ArticleComponent from '../components/ArticleComponent/ArticleComponent';
import AuthorCard from '../components/AuthorCard/AuthorCard';
import ArticleSpecsButtons from '../components/ArticleSpecsButtons/ArticleSpecsButtons';
import { VERCEL_URL } from '../constants';

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
                        objectFit="cover"
                    />
                </div>
                <div className={styles.excerpt}>{article.excerpt}</div>
                <hr
                    style={{
                        width: '80%',
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
                    <ArticleComponent article={article} />
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

    const res = await fetch(`${VERCEL_URL}/api/articles/${params.slug}`);
    const article: Article = await res.json();

    return {
        props: { article },
    };
};

export const getStaticPaths: GetStaticPaths = async () => {
    const res = await fetch(`${VERCEL_URL}/api/articles`);
    const articles: Article[] = await res.json();

    const paths = articles.map((article) => ({
        params: { slug: article.slug },
    }));

    return {
        paths,
        fallback: false,
    };
};

export default ArticlePage;
