import Image from 'next/image';
import React, { FC } from 'react';

interface Props {
    name: string;
    date: Date;
    description: string;
    imgUrl: string;
}

const AuthorCard: FC<Props> = (props) => {
    const { name, date, description, imgUrl } = props;
    return(
        <div className='author-card'>
           <h3>{name}</h3> 
           <p>{description || 'test description'}</p>
           <Image alt={name} src={imgUrl}/>
           <p>{date.toDateString()}</p>
        </div>
    )
}

export default AuthorCard;