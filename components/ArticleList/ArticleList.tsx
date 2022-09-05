import React, { FC, Fragment } from 'react';
import { productUrlTest } from '../../constants';

import styles from './ArticleList.module.css';
import ArticleThumbnail from '../ArticleThumbnail/ArticleThumbnail';

interface Props {
    articles: Article[];
}

const ArticleList: FC<Props> = ({ articles }) => (
    <ul className={styles.wrapper}>
        {articles.map((article) => (
            <Fragment key={article.id}>
                <sesamy-content-listing
                    item-src={`${productUrlTest}/${article.slug}`}
                    publisher-product-id={`${article.id}`}
                >
                    <ArticleThumbnail article={article} />
                </sesamy-content-listing>
            </Fragment>
        ))}
    </ul>
);

export default ArticleList;
