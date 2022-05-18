import React,{FC} from 'react';
import AnnoyingButton from '../AnnoyingButton/AnnoyingButton';
interface Props {
    article: {
        content: string;
        description: string;
        image: string;
        price: number;
        id: number;
        currency: string;
        title: string;
    }
}

const ArticleComponent:FC<Props> = ({article}) => {
    return (
        <>
            <AnnoyingButton article={article} />
        </>
    );

}

export default ArticleComponent;