import React, { FC } from 'react';

import styles from './ArticleList.module.css';
import ArticleThumbnail from '../ArticleThumbnail/ArticleThumbnail';

interface Props {
    articles: Article[];
}

const ArticleList: FC<Props> = ({ articles }) => (
    <ul className={styles.wrapper}>
        {articles.map((article) => (
            <sesamy-content-listing
                itemSrc={`/${article.slug}`}
                publisherProductID={`${article.id}`}
                key={article.id}
            >
                <ArticleThumbnail article={article} />
            </sesamy-content-listing>
        ))}
    </ul>
);

export default ArticleList;
