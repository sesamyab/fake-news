import React,{FC} from 'react';
import { GetStaticProps } from 'next';
import Image from 'next/image';

import readingSpeed from '../utils/readingSpeed';


interface Props {
    title: string;
    imageUrl: string;
    content: string;
    authorName: string;
}

const ArticlePage:FC<Props> = (props) => {
    const {title, imageUrl, content, authorName} = props;
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

export default ArticlePage;