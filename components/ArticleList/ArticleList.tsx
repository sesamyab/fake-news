import React, { FC } from 'react';

import styles from './ArticleList.module.css';
import ArticleThumbnail from '../ArticleThumbnail/ArticleThumbnail';

interface Props {
    articles: Article[];
}

const ArticleList: FC<Props> = ({ articles }) => (
    <ul className={styles.wrapper}>
        {articles.map((article) => (
            <ArticleThumbnail key={article.id} article={article} />
        ))}
    </ul>
);

export default ArticleList;
