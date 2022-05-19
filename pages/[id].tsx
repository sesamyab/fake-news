import React,{FC} from 'react';
import { GetStaticProps,GetStaticPaths } from 'next';
import Image from 'next/image';
import styles from '../styles/Article.module.css';

import { Icon, Layout} from '../components';
import readingSpeed from '../utils/readingSpeed';
import numberFormatter from '../utils/numberFormatter';
import dateFormatter from '../utils/dateFormatter';

import ArticleComponent from '../components/ArticleComponent/ArticleComponent';
import AuthorCard from '../components/AuthorCard/AuthorCard';
interface Props {
   article: Article;
}

const ArticlePage:FC<Props> = ({ article }) => {
    return (
        <Layout>
            <div className={styles.articlePage}>
                <p className={styles.topic}>{article.title}</p>
                <h1 className={styles.title}>{article.title}</h1>
                <div style={{width: '100%', height:450, position: 'relative'}}>
                    <Image
                        alt={article.title}
                        src={article.image}
                        layout='fill'
                        objectFit='cover'
                    />
                </div>
                <div className={styles.excerpt}>{article.excerpt}</div>
                <hr style={{width:'80%'}}/>
                <AuthorCard 
                    name={article.author} 
                    date={dateFormatter(article.date)}
                    description={article.description}
                    image={article.image}
                />
                <p style={{ display: 'flex',alignItems: 'center'}}>
                    <Icon size={24} name='clock'/> LÄSTID {numberFormatter(readingSpeed(article.content))} min
                </p>
                <div className={styles.articleContent}>
                    <ArticleComponent article={article}/>
                </div>
            </div>
        </Layout>
    )
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
    const res = await fetch(`http://localhost:3000/api/articles/${params.id}`);
    const article: Article = await res.json();
        
    return {
        props: { article }        
    }
}

export const getStaticPaths: GetStaticPaths = async () => {
    const res = await fetch(`http://localhost:3000/api/articles`);
    const articles: Article[] = await res.json();

    const paths = articles.map(article => ({
        params: { id: article.id.toString() }
    }));

    return {
        paths,
        fallback: false
    }
}

export default ArticlePage;