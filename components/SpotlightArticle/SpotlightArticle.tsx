import Image from 'next/image';
import Link from 'next/link';
import React, { FC } from 'react';
import styles from '../../styles/Spotlight.module.css';

interface Props {
    article: Article;
}

const SpotlightArticle: FC<Props> = (props) => {
    const { article } = props;
    return (
        <div className={styles.spotlight}>
            <Link href={`/${article.slug}`}>
                <div style={{ width: '100%', height: '650px', position: 'relative' }}>
                    <Image
                        alt={article.title}
                        src={article.image}
                        layout="fill"
                        objectFit="cover"
                    />
                </div>
            </Link>
            <div className={styles.spotlightInfo}>
                <h1>{article.title}</h1>
                <p className={styles.authorDescription}>{article.excerpt}</p>
            </div>
        </div>
    );
};

export default SpotlightArticle;
