import React,{FC} from 'react';
import AnnoyingButton from '../AnnoyingButton/AnnoyingButton';
interface Props {
    content: string;
    description: string;
    image: string;
}

const ArticleComponent:FC<Props> = (props) => {
    const { content,description,image } = props;
    return (
        <>
            <AnnoyingButton content={content} price={13} description={description} image={image}/>
        </>
    );

}

export default ArticleComponent;