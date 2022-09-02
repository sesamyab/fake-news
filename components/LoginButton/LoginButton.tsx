import React from 'react';
import { useRouter } from 'next/router';

const LoginButton = () => {
    const { pathname } = useRouter();
    const styleLogged = {
        '--logged-color': pathname !== '/' ? '#030303' : '#f3f3f3',
    } as React.CSSProperties;
    const loggoutStyle = {
        // will apply when variant is merged
        '--logout-color': pathname !== '/' ? '#030303' : '#f3f3f3',
    } as React.CSSProperties;
    return (
        <div style={{ display: 'flex', alignItems: 'center' }}>
            <sesamy-login style={styleLogged}></sesamy-login>
            <sesamy-logout></sesamy-logout>
        </div>
    );
};

export default LoginButton;
