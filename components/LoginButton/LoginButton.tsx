import React from 'react';
<<<<<<< HEAD
=======
import { useRouter } from 'next/router';

enum Variant {
    Picture = 'picture',
    Logout = 'logout',
    SesamyText = 'sesamy-text',
}
>>>>>>> ff996bf... update correctly the loggedin states

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
<<<<<<< HEAD
        <div>
            <sesamy-login></sesamy-login>
=======
        <div style={{ display: 'flex', alignItems: 'center' }}>
            <sesamy-login style={styleLogged} client-id="sesamy"></sesamy-login>
            <sesamy-login
                style={loggoutStyle}
                client-id="sesamy"
                variant={Variant.Logout}
            ></sesamy-login>
>>>>>>> ff996bf... update correctly the loggedin states
        </div>
    );
};

export default LoginButton;
