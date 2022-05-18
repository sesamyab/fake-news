import React from 'react';
import Script from 'next/script';

interface Props {
    content: string;
    price: number;
    description: string;
    image: string;
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

function AnnoyingButton(props: Props) {
    const { content, price,description,image } = props;
    return (
        <div>
            <sesamy-content-container 
            show-child-count="0" 
            gradient="false" 
            item-src="https://news-demo-seven.vercel.app/www.cornucopia.se/2022/05/paverkanskampanjer-mot-nato-pagar"
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
                item-src="https://news-demo-seven.vercel.app/www.cornucopia.se/2022/05/paverkanskampanjer-mot-nato-pagar"
                />
            </sesamy-button-container>
            <Script defer src="https://assets.sesamy.dev/scripts/checkout-button/sesamy-content-container.min.js"/>
            <Script defer src="https://assets.sesamy.dev/scripts/checkout-button/sesamy-button-container.min.js"/>
            <Script defer src="https://assets.sesamy.dev/scripts/checkout-button/sesamy-button.min.js"/>
          </div>
        );
  }

  export default AnnoyingButton;