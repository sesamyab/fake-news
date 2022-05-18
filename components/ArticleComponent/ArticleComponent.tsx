import React,{FC} from 'react';
import AnnoyingButton from '../AnnoyingButton/AnnoyingButton';
interface Props {
    content: string;
}

const ArticleComponent:FC<Props> = (props) => {
    const { content } = props;
    return (
        <>
            <AnnoyingButton content={content} price={13}/>
        </>
    );

}

export default ArticleComponent;