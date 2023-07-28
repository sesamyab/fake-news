import React, { FC } from 'react';
import { GetServerSideProps } from 'next';
import Image from 'next/image';

import { find, findById } from '../../repositories/articles';
import styles from '../../styles/Article.module.css';
import { Layout } from '../../components';
import dateFormatter from '../../utils/dateFormatter';
import SSRArticle from '../../components/Article/SSRArticle';
import AuthorCard from '../../components/AuthorCard/AuthorCard';
import ArticleSpecsButtons from '../../components/ArticleSpecsButtons/ArticleSpecsButtons';
import { authorize } from '../../utils/authorize';

interface Props {
    article: Article | null;
    unlocked: boolean;
}

const SSRArticlePage: FC<Props> = ({ article, unlocked }) => {
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
                    <SSRArticle article={article} unlocked={unlocked} />
                </div>
            </div>
        </Layout>
    );
};

export const getServerSideProps: GetServerSideProps = async ({ params, req, query }) => {
    const { ss } = query;

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

    let unlocked = false;

    // Check if url is signed
    if (ss) {
        try {
            await authorize(req.url!, [req.url!]);
            unlocked = true;
        } catch (err) {
            // Failed to authorize
        }
    }

    return {
        props: { article, unlocked },
    };
};

export default SSRArticlePage;
