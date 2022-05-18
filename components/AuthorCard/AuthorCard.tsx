import Image from 'next/image';
import React, { FC } from 'react';
import styles from '../../styles/AuthorCard.module.css';
interface Props {
    name: string;
    date: string;
    description: string;
    image: string;
}

const AuthorCard: FC<Props> = (props) => {
    const { name, date, description, image } = props;
    return(
        <div className={styles.authorCard}>
            <div style={{margin:'20px'}}>
                <Image
                    alt={name}
                    src={image}
                    width={150}
                    height={150}
                    layout='intrinsic'
                    objectFit='cover'
                />
            </div>
            <div className={styles.authorInfo}>
                <h3>{name} | {date} </h3> 
                <p className={styles.authorDescription}>some description for now</p>
            </div>
        </div>
    )
}

export default AuthorCard;