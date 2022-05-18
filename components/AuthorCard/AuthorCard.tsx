import Image from 'next/image';
import React, { FC } from 'react';
import dateFormatter from '../../utils/dateFormatter';
interface Props {
    name: string;
    date: Date;
    description: string;
    image: string;
}

const AuthorCard: FC<Props> = (props) => {
    const { name, date, description, image } = props;
    return(
        <div className='author-card'>
           <h3>{name}</h3> 
           <p>{description || 'test description'}</p>
           <div style={{width: '100%', height:300, position: 'relative'}}>
                <Image
                    alt={name}
                    src={image}
                    layout='fill'
                    objectFit='contain'
                />
            </div>           
            <p>{dateFormatter(date)}</p>
        </div>
    )
}

export default AuthorCard;