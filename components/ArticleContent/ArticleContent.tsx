/* eslint-disable @next/next/no-img-element */
import React from 'react';
import { productUrlTest } from '../../constants';
import OneTimePaymentButton from '../Button/OneTimePaymentButton';
import SubscriptionButton from '../Button/SubscriptionButton';
import LockedContentContainer from '../LockedContentContainer/LockedContentContainer';

interface Props {
    article: Article;
    hasPublicContent: boolean;
    hasServerSideContent: boolean;
    hasPass: boolean;
    hasExcerpt: boolean;
}

function AnnoyingButton({
    article,
    hasPublicContent,
    hasServerSideContent = false,
    hasPass = false,
    hasExcerpt = false,
}: Props) {
    const { id, content, price, description, image, title, slug, excerpt } = article;
    const contentDataProps = {
        id: id.toString(),
        price,
        title,
        description,
        image,
        pass: hasPass ? `${productUrlTest}/subscription` : undefined,
        'item-src': `${productUrlTest}/${slug}`,
        public: hasPublicContent || undefined,
    };
    const contentContainerProps = {
        'access-url': hasServerSideContent ? `/api/access/${slug}` : undefined,
    };

    return (
        <>
            <sesamy-content-data {...contentDataProps}></sesamy-content-data>
            <sesamy-content-container {...contentContainerProps}>
                {hasExcerpt && <div slot="preview" dangerouslySetInnerHTML={{ __html: excerpt }} />}
                {hasServerSideContent && (
                    <div slot="content" dangerouslySetInnerHTML={{ __html: content }} />
                )}
            </sesamy-content-container>
            <sesamy-locked-content-container>
                <LockedContentContainer
                    firstSlot={<OneTimePaymentButton id={id.toString()} />}
                    secondSlot={<SubscriptionButton id={id.toString()} />}
                />
            </sesamy-locked-content-container>
        </>
    );
}

export default AnnoyingButton;
