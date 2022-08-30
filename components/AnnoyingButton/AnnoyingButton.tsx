/* eslint-disable @next/next/no-img-element */
import React from 'react';
import Head from 'next/head';
import styles from './AnnoyingButton.module.css';

import { NEXT_PUBLIC_PRODUCT_URL_TEST } from '../../constants';

interface Props {
    article: Article;
}

function AnnoyingButton({ article }: Props) {
    const { content, price, description, image, title, slug, excerpt } = article;

    return (
        <div style={{ marginBottom: '60px' }}>
            <Head>
                <meta property="sesamy:price" content={String(price)} />
                <meta property="sesamy:currency" content="SEK" />
                <meta property="sesamy:description" content={description} />
                <meta property="sesamy:image" content={image} />
                <meta property="sesamy:title" content={title} />
                <meta property="sesamy:client-id" content="sesamy" />
            </Head>

            <sesamy-content-container
                lock-mode="signedUrl"
                item-src={`${NEXT_PUBLIC_PRODUCT_URL_TEST}${slug}`}
                pass={`${NEXT_PUBLIC_PRODUCT_URL_TEST}subscription`}
                access-url={`${NEXT_PUBLIC_PRODUCT_URL_TEST}/api/access/${slug}`}
            >
                <div slot="preview" dangerouslySetInnerHTML={{ __html: excerpt }} />
                <div slot="content" dangerouslySetInnerHTML={{ __html: content }} />
            </sesamy-content-container>
            <sesamy-locked-content-container
                item-src={`${NEXT_PUBLIC_PRODUCT_URL_TEST}${slug}`}
                pass={`${NEXT_PUBLIC_PRODUCT_URL_TEST}subscription`}
            >
                <svg style={{ display: 'none' }}>
                    <defs>
                        <symbol id="tf-fas-book-reader" viewBox="0 0 32 32">
                            <path d="M22 6q0 2.5-1.75 4.25T16 12t-4.25-1.75T10 6t1.75-4.25T16 0t4.25 1.75T22 6zm-7.375 9.063q.375.25.375.75v15.375q0 .438-.406.688t-.844 0q-4.375-2.188-12.125-2.563-.688-.063-1.156-.531T0 27.626V13.688q0-.75.563-1.25T1.876 12q8.5.5 12.75 3.063zM30.125 12q.5 0 .938.219t.688.594.25.875v13.938q0 .688-.469 1.156t-1.156.531q-7.75.438-12.063 2.563-.313.188-.625.125t-.5-.313-.188-.5V15.813q0-.5.375-.75Q21.625 12.5 30.125 12z"></path>
                        </symbol>
                        <symbol id="tf-ti-arrow-right" viewBox="0 0 32 32">
                            <path d="M29.563 15.938L15.75 2.125l-1.375 1.313 11.563 11.563H1.875v1.875h24.063L14.375 28.439l1.375 1.375z"></path>
                        </symbol>
                    </defs>
                </svg>
                <div
                    style={{
                        boxShadow: '6px 10px 20px 0px rgb(199 191 191)',
                        margin: 'auto',
                        marginTop: '1.6em',
                        marginBottom: '1em',
                        width: '100%',
                        maxWidth: '561px',
                    }}
                >
                    <div style={{ textAlign: 'center' }}>
                        <img
                            decoding="async"
                            loading="lazy"
                            src="https://test.kvartal.se/wp-content/uploads/2022/08/kvartal-hare-40x67.png"
                            width="40"
                            height="67"
                            className="wp-post-image wp-image-38053"
                            title="kvartal-hare"
                            alt="kvartal-hare"
                            sizes="(max-width: 40px) 100vw, 40px"
                            style={{ marginTop: '1.3em', marginBottom: '0.5em' }}
                        />
                        <h3
                            style={{
                                fontFamily: 'Playfair Display',
                                fontSize: '20px',
                                marginBottom: '26px',
                                fontWeight: 400,
                            }}
                        >
                            Redan prenumerant?{' '}
                            <a
                                href="#"
                                style={{ textDecoration: 'none', color: 'rgba(117, 33, 71, 1)' }}
                            >
                                Logga in här
                            </a>
                        </h3>
                        <sesamy-button
                            price={price}
                            currency="SEK"
                            item-src={`${NEXT_PUBLIC_PRODUCT_URL_TEST}${slug}`}
                            pass={`${NEXT_PUBLIC_PRODUCT_URL_TEST}subscription`}
                            style={{
                                display: 'flex',
                                justifyContent: 'center',
                                marginTop: '16px',
                                marginBottom: '20px',
                            }}
                        >
                            <div slot="button-text">
                                <em
                                    style={{
                                        display: 'inline-block',
                                        fontSize: '16px',
                                        lineHeight: 1,
                                        marginRight: '8px',
                                    }}
                                >
                                    <svg
                                        aria-hidden="true"
                                        style={{
                                            display: 'inline-block',
                                            width: '1em',
                                            height: '1em',
                                            strokeWidth: 0,
                                            stroke: 'white',
                                            overflow: 'visible',
                                            fill: 'white',
                                            pointerEvents: 'none',
                                            verticalAlign: 'middle',
                                        }}
                                    >
                                        <use href="#tf-fas-book-reader"></use>
                                    </svg>
                                </em>
                                <span>Lås upp artikel</span>
                            </div>
                        </sesamy-button>
                    </div>
                    <div
                        style={{
                            padding: '1.7em 0',
                            textAlign: 'center',
                            backgroundColor: 'rgba(214, 214, 214, 0.29)',
                        }}
                    >
                        <h3
                            style={{
                                fontSize: '25px',
                                color: 'rgba(28, 26, 26, 1)',
                                fontWeight: 700,
                                fontFamily: 'Playfair Display',
                                marginBottom: '12.5px',
                            }}
                        >
                            Eller läs Kvartal i en månad för bara 39 kr
                        </h3>
                        <p
                            style={{
                                fontWeight: 400,
                                fontFamily: 'Open Sans',
                                marginBottom: '19.5px',
                                color: '#666',
                                lineHeight: '1.65em',
                            }}
                        >
                            <small>Därefter 99 kr i månaden utan bindningstid.</small>
                        </p>
                        <sesamy-button
                            item-src={`${NEXT_PUBLIC_PRODUCT_URL_TEST}${slug}`}
                            style={{
                                display: 'flex',
                                justifyContent: 'center',
                                marginTop: '16px',
                                marginBottom: '20px',
                            }}
                            hide-price="true"
                        >
                            <div slot="button-text">
                                <span style={{ marginRight: '0.5em' }}>Bli prenumerant</span>
                                <em
                                    style={{
                                        display: 'inline-block',
                                        fontSize: '16px',
                                        lineHeight: 1,
                                    }}
                                >
                                    <svg
                                        aria-hidden="true"
                                        style={{
                                            display: 'inline-block',
                                            width: '1em',
                                            height: '1em',
                                            strokeWidth: 0,
                                            stroke: 'white',
                                            overflow: 'visible',
                                            fill: 'white',
                                            pointerEvents: 'none',
                                            verticalAlign: 'middle',
                                        }}
                                    >
                                        <use href="#tf-ti-arrow-right"></use>
                                    </svg>
                                </em>
                            </div>
                        </sesamy-button>
                    </div>
                </div>
            </sesamy-locked-content-container>
        </div>
    );
}

export default AnnoyingButton;
