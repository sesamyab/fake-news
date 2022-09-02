import React from 'react';
import { useRouter } from 'next/router';

enum Variant {
    Picture = 'picture',
    Logout = 'logout',
    SesamyText = 'sesamy-text',
}

const LoginButton = () => {
    const { pathname } = useRouter();
    const styleLogged = {
        '--logged-color': pathname !== '/' ? '#030303' : '#f3f3f3',
    } as React.CSSProperties;
    const loggoutStyle = {
        '--color': pathname !== '/' ? '#030303' : '#f3f3f3',
    } as React.CSSProperties;
    return (
        <div style={{ display: 'flex', alignItems: 'center' }}>
            <sesamy-login style={styleLogged} client-id="sesamy"></sesamy-login>
            <sesamy-logout style={loggoutStyle}></sesamy-logout>
        </div>
    );
};

export default LoginButton;
