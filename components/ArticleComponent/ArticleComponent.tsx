import React,{FC} from 'react';

interface Props {
    content: string;
}

const ArticleComponent:FC<Props> = (props) => {
    const { content } = props;
    return (
        <div
            dangerouslySetInnerHTML={{__html: content}}
        />
    );
}

export default ArticleComponent;