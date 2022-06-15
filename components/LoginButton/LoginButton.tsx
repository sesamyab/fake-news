import React from 'react';
import Script from 'next/script';

interface SesamyButtonProps
    extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> {
    'client-id': string;
}

declare global {
    namespace JSX {
        interface IntrinsicElements {
            'sesamy-login': SesamyButtonProps;
        }
    }
}

const LoginButton = () => {
    return (
        <div>
            <sesamy-login client-id="sesamy"></sesamy-login>
            <Script
                defer
                src="https://assets.sesamy.dev/scripts/checkout-button/sesamy-login.min.js"
            />
        </div>
    );
};

export default LoginButton;
