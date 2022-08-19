import React from 'react';
enum Variant {
    Picture = 'picture',
    Logout = 'logout',
    SesamyText = 'sesamy-text',
}

const LoginButton = () => {
    return (
        <div>
            <sesamy-login client-id="sesamy"></sesamy-login>
            <sesamy-login client-id="sesamy" variant={Variant.Logout}></sesamy-login>
        </div>
    );
};

export default LoginButton;
