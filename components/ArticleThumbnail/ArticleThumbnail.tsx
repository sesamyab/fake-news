import Image from 'next/image';
import Link from 'next/link';
import React, { FC } from 'react';
import { intlFormat } from 'date-fns';
import styles from './ArticleThumbnail.module.css';

interface Props {
    article: Article;
}

const ArticleThumbnail: FC<Props> = ({ article }) => (
    <li>
        <Link href={`/${article.slug}`}>
            <a className={styles.wrapper}>
                <div className={styles.imageWrapper}>
                    <Image
                        alt={article.title}
                        src={article.image}
                        layout="fill"
                        objectFit="cover"
                        objectPosition="50% 50%"
                    />
                </div>
                <div className={styles.text}>
                    <p className={styles.description}>{article.price}</p>
                    <h3 className={styles.title}>{article.title}</h3>
                    <p className={styles.description}>
                        {intlFormat(
                            new Date(article.date),
                            {
                                weekday: 'long',
                                year: 'numeric',
                                month: 'long',
                                day: 'numeric',
                            },
                            {
                                locale: 'se-SE',
                            }
                        )}
                    </p>
                </div>
            </a>
        </Link>
    </li>
);
export default ArticleThumbnail;
