import Image from 'next/image';
import Link from 'next/link';
import React, { FC } from 'react';
import { hasPass, hasPublicContent } from '../../utils/article';
import styles from './ArticleThumbnail.module.css';

interface Props {
    article: Article;
}

const ArticleThumbnail: FC<Props> = ({ article }) => (
    <li>
        <Link href={`/${article.slug}`}>
            <a className={styles.wrapper}>
                <div className={styles.imageContainer}>
                    <div className={styles.imageWrapper}>
                        <Image
                            alt={article.title}
                            src={article.image}
                            layout="fill"
                            objectFit="contain"
                        />
                    </div>
                </div>

                <div>
                    {hasPublicContent(article.id) && (
                        <span style={{ fontSize: '12px', color: 'green' }}>Public</span>
                    )}
                    {hasPass(article.id) && (
                        <span style={{ fontSize: '12px', color: 'red' }}>Pass</span>
                    )}
                </div>
                <h3 className={styles.title}>{article.title}</h3>
                <p className={styles.description}>{article.description}</p>
            </a>
        </Link>
    </li>
);
export default ArticleThumbnail;
