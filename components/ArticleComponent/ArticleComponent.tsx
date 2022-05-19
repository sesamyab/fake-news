import React,{FC} from 'react';
import AnnoyingButton from '../AnnoyingButton/AnnoyingButton';
interface Props {
    article: Article
}

const ArticleComponent:FC<Props> = ({article}) => {
    return (
        <>
            <AnnoyingButton article={article} />
        </>
    );

}

export default ArticleComponent;