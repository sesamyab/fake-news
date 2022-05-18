import React,{FC} from 'react';
import { GetStaticProps,GetStaticPaths } from 'next';
import Image from 'next/image';
import Icon from '../components/Icon/Icon';

import readingSpeed from '../utils/readingSpeed';
import createExcerpt from '../utils/createExcerpt';
import numberFormatter from '../utils/numberFormatter';
import dateFormatter from '../utils/dateFormatter';

import ArticleComponent from '../components/ArticleComponent/ArticleComponent';
import AuthorCard from '../components/AuthorCard/AuthorCard';
interface Article {
    id: number;
    title: string;
    image: string;
    description: string;
    content: string;
    author: string;
    date:string;
    excerpt:string;
}
interface Props {
   article: Article;
}

const excerptRenderer = (excerpt:string,content:string) => {
    if(excerpt)return(
        <div
                dangerouslySetInnerHTML={{__html: excerpt}}
        />
    )
   return(
    <div
        dangerouslySetInnerHTML={{__html: createExcerpt(content,150)}}
    />
   ) 
}

const ArticlePage:FC<Props> = ({ article }) => {
    return (
        <div className='article-page'>
            <h1>{article.title}</h1>
            <div className='article-excerpt'>{excerptRenderer(article.excerpt,article.content)}</div>
            <div style={{width: '100%', height:300, position: 'relative'}}>
                <Image
                    alt={article.title}
                    src={article.image}
                    layout='fill'
                    objectFit='contain'
                />
            </div>
            <p style={{ display: 'flex',alignItems: 'center'}}>
                <Icon size={24} name='clock'/> LÄSTID {numberFormatter(readingSpeed(article.content))} min
            </p>
            <hr/>
            <AuthorCard 
                name={article.author} 
                date={dateFormatter(article.date)}
                description={article.description}
                image={article.image}
            />
            <ArticleComponent article={article}/>
        </div>
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