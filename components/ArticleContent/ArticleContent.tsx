/* eslint-disable @next/next/no-img-element */
import React from 'react';
import { productUrlTest } from '../../constants';
import { hasPass, hasPublicContent, hasServerSideContent, showExcerpt } from '../../utils/article';
import OneTimePaymentButton from '../Button/OneTimePaymentButton';
import SubscriptionButton from '../Button/SubscriptionButton';
import LockedContentContainer from '../LockedContentContainer/LockedContentContainer';

interface Props {
    article: Article;
}

function AnnoyingButton({ article }: Props) {
    const { id, content, price, description, image, title, slug, excerpt } = article;
    const contentDataProps = {
        id: id.toString(),
        price,
        title,
        description,
        image,
        pass: hasPass(id) ? `${productUrlTest}/subscription` : undefined,
        'item-src': `${productUrlTest}/${slug}`,
        public: hasPublicContent(id) || undefined,
    };
    const contentContainerProps = {
        'publisher-content-id': id.toString(),
        'access-url': hasServerSideContent(id) ? `/api/access/${slug}` : undefined,
    };

    return (
        <div id="article">
            <sesamy-content-data {...contentDataProps}></sesamy-content-data>
            <sesamy-content-container {...contentContainerProps}>
                {showExcerpt(id) && (
                    <div slot="preview" dangerouslySetInnerHTML={{ __html: excerpt }} />
                )}
                {!hasServerSideContent(id) && (
                    <div slot="content" dangerouslySetInnerHTML={{ __html: content }} />
                )}
            </sesamy-content-container>
            <sesamy-locked-content-container publisher-content-id={id.toString()}>
                <LockedContentContainer
                    firstSlot={<OneTimePaymentButton id={id.toString()} />}
                    secondSlot={<SubscriptionButton pass={`${productUrlTest}/subscription`} />}
                />
            </sesamy-locked-content-container>
        </div>
    );
}

export default AnnoyingButton;
