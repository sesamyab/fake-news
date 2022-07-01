import type { AppProps } from 'next/app';
// font awesome
import '@fortawesome/fontawesome-svg-core/styles.css';
import { config } from '@fortawesome/fontawesome-svg-core';
import React from 'react';
import Script from 'next/script';

import '../styles/fonts.css';
import '../styles/globals.css';

config.autoAddCss = false;

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <React.Fragment>
            <Component {...pageProps} />
            {/* <Script src="https://scripts.simpleanalyticscdn.com/latest.js" /> */}
            <noscript>
                {/* eslint-disable @next/next/no-img-element */}
                <img
                    src="https://queue.simpleanalyticscdn.com/noscript.gif"
                    alt=""
                    referrerPolicy="no-referrer-when-downgrade"
                />
            </noscript>
        </React.Fragment>
    );
}

export default MyApp;
