/* eslint-disable @next/next/no-img-element */
import React from 'react';
import { productUrlTest } from '../../constants';
import OneTimePaymentButton from '../Button/OneTimePaymentButton';
import SubscriptionButton from '../Button/SubscriptionButton';
import LockedContentContainer from '../LockedContentContainer/LockedContentContainer';

interface Props {
    article: Article;
    unlocked: boolean;
}

function SSRArticleContent({ article, unlocked }: Props) {
    const { id, content, excerpt } = article;

    if (unlocked) {
        return <div id="article">{content}</div>;
    }

    return (
        <>
            <div id="article">{excerpt}</div>{' '}
            <LockedContentContainer
                firstSlot={<OneTimePaymentButton id={id.toString()} />}
                secondSlot={<SubscriptionButton pass={`${productUrlTest}/subscription`} />}
            />
        </>
    );
}

export default SSRArticleContent;
