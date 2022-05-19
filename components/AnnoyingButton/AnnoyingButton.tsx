import React, { useEffect, useState } from 'react';
import Script from 'next/script';
import Head from 'next/head';

import { PRODUCT_URL_TEST } from '../../constants'
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
    const [productUrl, setProductUrl] = useState("");
    const { content, price, description, image, title } = article;


    useEffect(() => {
      const isLocalhost = window.location.host.includes("localhost");
      const productUrl = isLocalhost ? PRODUCT_URL_TEST as string: window.location.href;
``
      setProductUrl(productUrl);
    }, []);
    
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
              item-src={productUrl}
            >
                <div
                    dangerouslySetInnerHTML={{__html: content}}
                />
            </sesamy-content-container>
                <sesamy-button-container imageSrc={image} description={description}>
                <sesamy-button 
                    text={`Buy for`}
                    price={price}
                    currency="SEK"
                    item-src={productUrl}/>
            </sesamy-button-container>
            <Script defer src="https://assets.sesamy.dev/scripts/checkout-button/sesamy-content-container.min.js"/>
            <Script defer src="https://assets.sesamy.dev/scripts/checkout-button/sesamy-button-container.min.js"/>
            <Script defer src="https://assets.sesamy.dev/scripts/checkout-button/sesamy-button.min.js"/>
          </div>
        );
  }

  export default AnnoyingButton;