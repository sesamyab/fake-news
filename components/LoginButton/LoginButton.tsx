import React from 'react';
import Script from 'next/script';

const LoginButton = () => {
    return (
        <div>
            <sesamy-login client-id="sesamy"></sesamy-login>
            <Script
                defer
                src="https://assets.sesamy.dev/scripts/checkout-button-markus/sesamy-login.min.js"
            />
        </div>
    );
};

export default LoginButton;
