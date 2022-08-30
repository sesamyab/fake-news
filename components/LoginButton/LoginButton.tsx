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
        // will apply when variant is merged
        '--logout-color': pathname !== '/' ? '#030303' : '#f3f3f3',
    } as React.CSSProperties;
    return (
        <div style={{ display: 'flex', alignItems: 'center' }}>
            <sesamy-login style={styleLogged} client-id="sesamy"></sesamy-login>
            <sesamy-login
                style={loggoutStyle}
                client-id="sesamy"
                variant={Variant.Logout}
            ></sesamy-login>
        </div>
    );
};

export default LoginButton;
