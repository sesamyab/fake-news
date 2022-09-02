import React, { FC } from 'react';
import Head from 'next/head';
import ArticleContent from '../ArticleContent/ArticleContent';
interface Props {
    article: Article;
    isPublic?: boolean;
    serverSideContent?: boolean;
    withPass?: boolean;
    withExcerpt?: boolean;
}

const ArticleComponent: FC<Props> = ({
    article,
    isPublic = false,
    serverSideContent = false,
    withPass = false,
    withExcerpt = false,
}) => {
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
                isPublic={isPublic}
                serverSideContent={serverSideContent}
                withPass={withPass}
                withExcerpt={withExcerpt}
            />
        </>
    );
};

export default ArticleComponent;
