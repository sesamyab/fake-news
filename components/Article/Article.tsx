import React from 'react';
import Head from 'next/head';
import ArticleContent from '../ArticleContent/ArticleContent';
interface Props {
    article: Article;
    hasPublicContent?: boolean;
    hasServerSideContent?: boolean;
    hasPass?: boolean;
    hasExcerpt?: boolean;
}

function Article({
    article,
    hasPublicContent = false,
    hasServerSideContent = false,
    hasPass = false,
    hasExcerpt = false,
}: Props) {
    const { price, description, image, title } = article;

    return (
        <>
            <Head>
                <meta property="sesamy:price" content={String(price)} />
                <meta property="sesamy:currency" content="SEK" />
                <meta property="sesamy:description" content={description} />
                <meta property="sesamy:image" content={image} />
                <meta property="sesamy:title" content={title} />
                <meta property="sesamy:client-id" content="sesamy" />
            </Head>
            <ArticleContent
                article={article}
                hasPublicContent={hasPublicContent}
                hasServerSideContent={hasServerSideContent}
                hasPass={hasPass}
                hasExcerpt={hasExcerpt}
            />
        </>
    );
}

export default Article;
