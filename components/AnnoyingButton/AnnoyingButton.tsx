import React from 'react';
import Script from 'next/script';
import Head from 'next/head';

interface Props {
    article: Article
}

declare global {
    namespace JSX {
      interface IntrinsicElements {
        'sesamy-content-container': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
        'sesamy-button-container': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
        'sesamy-button': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
      }
    }
  }

function AnnoyingButton({ article }: Props) {
    const { content, price,description,image, title } = article;
    return (
        <div>
            <Head>
                <meta property='sesamy:price' content={price} />
                <meta property='sesamy:currency' content="SEK" />
                <meta property='sesamy:description' content={description} />
                <meta property='sesamy:image' content={image} />
                <meta property='sesamy:title' content={title} />
            </Head>
            <sesamy-content-container 
            show-child-count="0" 
            gradient="false"
            item-src="https://news-demo-seven.vercel.app/www.cornucopia.se/2022/05/paverkanskampanjer-mot-nato-pagar"
            >
                <div
                    dangerouslySetInnerHTML={{__html: content}}
                />
            </sesamy-content-container>
                <sesamy-button-container>
                <sesamy-button 
                    text={`Buy for`} 
                    item-src="https://news-demo-seven.vercel.app/www.cornucopia.se/2022/05/paverkanskampanjer-mot-nato-pagar"/>
            </sesamy-button-container>
            <Script defer src="https://assets.sesamy.dev/scripts/checkout-button/sesamy-content-container.min.js"/>
            <Script defer src="https://assets.sesamy.dev/scripts/checkout-button/sesamy-button-container.min.js"/>
            <Script defer src="https://assets.sesamy.dev/scripts/checkout-button/sesamy-button.min.js"/>
          </div>
        );
  }

  export default AnnoyingButton;