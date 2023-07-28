import React from 'react';
import Head from 'next/head';
import SSRArticleContent from '../ArticleContent/SSRArticleContent';
interface Props {
    article: Article;
    unlocked: boolean;
}

function SSRArticle({ article, unlocked }: Props) {
    const { price, description, image, title, slug } = article;

    return (
        <>
            <Head>
                <meta property="sesamy:price" content={String(price)} />
                <meta property="sesamy:currency" content="SEK" />
                <meta property="sesamy:description" content={description} />
                <meta property="sesamy:image" content={image} />
                <meta property="sesamy:title" content={title} />
                <meta property="sesamy:client-id" content="sesamy" />
                <meta property="sesamy:publisher-content-id" content={slug} />
            </Head>

            <SSRArticleContent article={article} unlocked={unlocked} />
        </>
    );
}

export default SSRArticle;
