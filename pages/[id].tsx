import React,{FC} from 'react';
import { GetStaticProps,GetStaticPaths } from 'next';
import Image from 'next/image';

import readingSpeed from '../utils/readingSpeed';

interface Article {
    id: number;
    title: string;
    imageUrl: string;
    content: string;
    authorName: string;
}
interface Props {
   article: Article;
}

const ArticlePage:FC<Props> = ({ article }) => {
    const {title, imageUrl, content, authorName} = article;
    
    return (
        <div className='article-page'>
            <h1>{title}</h1>
            <Image alt={imageUrl} src={imageUrl}/>
            <p>avg readspeed: {readingSpeed(content)}</p>
            <hr/>
            <div className='content'>{content}</div>
            <em>{authorName}</em>
        </div>
    )
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
    const res = await fetch(`http://localhost:3000/api/articles/${params.id}`);
    const article = await res.json();

    return {
        props: { ...article }        
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