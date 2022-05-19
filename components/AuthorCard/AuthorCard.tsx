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
            <div style={{margin:'20px',borderRadius:'50%',overflow:'hidden'}}>
                <Image
                    alt={name}
                    src={image}
                    width={100}
                    height={100}
                    objectFit='cover'
                />
            </div>
            <div className={styles.authorInfo}>
                <p>{name} | {date} </p> 
                <p className={styles.authorDescription}>
                    some description for now
                </p>
            </div>
        </div>
    )
}

export default AuthorCard;