import React, { useEffect, useState } from 'react';

import styles from './LoginButton.module.css';

interface User {
    name: string;
    id: string;
    iat: string;
}

function unpackToken(jwt: string) {
    const [,payload] = jwt.split('.');

    if(!payload) {
        return null;
    }

    return JSON.parse(atob(payload))
}

function handeLogin() {
    window.location.assign(`https://login.sesamy.dev/?response_type=token&client_id=fake-news&redirect_uri=${window.location.href}&scope=openid%20profile%20email&state=123456`);
}

function handeLogout() {
    document.cookie = `sesamy-auth=; max-age=0;`
    window.location.assign(`https://login.sesamy.dev/logout?returnTo=${encodeURI(`https://login.sesamy.dev/?response_type=token&client_id=fake-news&redirect_uri=${window.location.href}&scope=openid%20profile%20email&state=123456`)}`)
}

const LoginButton = () => {
    const [user, setUser] = useState<User | null>(null)

    useEffect(() => {
        const query = new URLSearchParams(window.location.search);

        const token = query.get('token')
        if (token) {
            // set cookie
            document.cookie = `sesamy-auth=${token}`
                    
            // remove token from string
            const url = new URL(window.location.href)
            url.searchParams.delete('token')
            url.searchParams.delete('state')
            document.location.replace(url.toString())
        }

        const cookie = document.cookie.split(";")
            .map((cookieString) => {
                const [key, value] = cookieString.trim().split("=");
                return { key, value }
            })
            .find(cookie => cookie.key === 'sesamy-auth')
            
            if (cookie) {
                const payload = unpackToken(cookie.value);

                console.log('Payload: ' + JSON.stringify(payload))

                if (!user) {
                    setUser(payload as User)
                }
            }
    }, [user]);


    if (user) {
        return (
            <a className={styles.wrapper} onClick={handeLogout}>
                {user.iat}  | Logout
            </a>
        )        
    }
    
    return (
    <a className={styles.wrapper} onClick={handeLogin}>
        Login
    </a>
    )
};

export default LoginButton;
