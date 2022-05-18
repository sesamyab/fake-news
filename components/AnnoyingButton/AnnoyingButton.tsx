import React from 'react';
import Script from 'next/script';

interface Props {
    content: string;
    price: number;
}

function AnnoyingButton(props: Props) {
    const { content, price } = props;
    return (
        <div>
            <sesamy-content-container show-child-count="0" gradient="false">
                <div
                    dangerouslySetInnerHTML={{__html: content}}
                />
            </sesamy-content-container>
                <sesamy-button-container>
                <sesamy-button text={`Buy for`} price={price} currency="kr"></sesamy-button>
            </sesamy-button-container>
            <Script defer src="https://assets.sesamy.dev/scripts/checkout-button/sesamy-content-container.min.js"/>
            <Script defer src="https://assets.sesamy.dev/scripts/checkout-button/sesamy-button-container.min.js"/>
            <Script defer src="https://assets.sesamy.dev/scripts/checkout-button/sesamy-button.min.js"/>
          </div>
        );
  }

  export default AnnoyingButton;