import Image from 'next/image';
import React, { FC } from 'react';
import dateFormatter from '../../utils/dateFormatter';
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
            <div style={{width: 150, height:150, position: 'relative'}}>
                <Image
                    alt={name}
                    src={image}
                    layout='fill'
                    objectFit='contain'
                />
            </div>  
            <div className={styles.authorInfo}>
                <h3>{name} | {dateFormatter(date)} </h3> 
                <p>some description for now</p>
            </div>
        </div>
    )
}

export default AuthorCard;