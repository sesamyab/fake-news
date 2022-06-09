import React, { useEffect, useState } from 'react';

import styles from './LoginButton.module.css';

const scopes = encodeURIComponent(['openid', 'vault:read'].join(' '));

interface User {
    fullName: string;
}

function getLoginUrl() {
    // set cookie
    const state = Date.now().toString();
    document.cookie = `sesamy-state=${state}; max-age=60;`;

    // This is a bit of extra fuzz to ensure we get the slash at the end
    const currentUrl = new URL(window.location.href);

    const loginUrl = new URL(`${process.env.NEXT_PUBLIC_LOGIN_BASE_URL}`);
    loginUrl.searchParams.set('response_type', 'token');
    loginUrl.searchParams.set('client_id', 'fake-news');
    loginUrl.searchParams.set('redirect_uri', currentUrl.toString());
    loginUrl.searchParams.set('scope', scopes);
    loginUrl.searchParams.set('state', state);

    return loginUrl.toString();
}

function handeLogin() {
    window.location.assign(getLoginUrl());
}

function handeLogout() {
    document.cookie = `sesamy-auth=; max-age=0;`;

    const loginUrl = getLoginUrl();
    const logoutUrl = new URL(`${process.env.NEXT_PUBLIC_LOGIN_BASE_URL}/logout`);
    logoutUrl.searchParams.set('returnTo', loginUrl);

    window.location.assign(logoutUrl.toString());
}

async function getProfile(token: string): Promise<User | null> {
    const response = await fetch(`${process.env.NEXT_PUBLIC_LOGIN_BASE_URL}/userinfo`, {
        headers: {
            authorization: `Bearer ${token}`,
            accept: 'application/json',
            useragent: navigator.userAgent,
        },
    });

    if (!response.ok) {
        return null;
    }

    const user = await response.json();
    return {
        fullName: user.fullName,
    };
}

function getCookie(key: string) {
    return document.cookie
        .split(';')
        .map((cookieString) => {
            const [key, value] = cookieString.trim().split('=');
            return { key, value };
        })
        .find((cookie) => cookie.key === key);
}

async function getEntitlements(token: string) {
    const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/vault/entitlements?type=article`,
        {
            headers: {
                authorization: `Bearer ${token}`,
                accept: 'application/json',
                useragent: navigator.userAgent,
            },
        }
    );

    if (!response.ok) {
        return null;
    }

    const entitlements = await response.json();
    console.log('Entitlements: ' + JSON.stringify(entitlements));
    document.cookie = `sesamy-entitlements=${JSON.stringify(entitlements)}`;
}

const LoginButton = () => {
    const [user, setUser] = useState<User | null>(null);

    useEffect(() => {
        const query = new URLSearchParams(window.location.search);

        const tokenQuerystring = query.get('token');
        const stateQuerystring = query.get('state');
        const stateCookie = getCookie('sesamy-state');
        if (tokenQuerystring && stateQuerystring === stateCookie?.value) {
            // set cookie
            document.cookie = `sesamy-auth=${tokenQuerystring}`;

            // remove token from string
            const url = new URL(window.location.href);
            url.searchParams.delete('token');
            url.searchParams.delete('state');
            document.location.replace(url.toString());
        }

        const tokenCookie = getCookie('sesamy-auth');
        const userCookie = getCookie('sesamy-user');

        if (tokenCookie && !user) {
            // This shouldn't really be called here.. Just want to trigger it somewhere
            getEntitlements(tokenCookie.value);
            if (!userCookie) {
                getProfile(tokenCookie.value).then((user) => {
                    document.cookie = `sesamy-user=${JSON.stringify(user)}`;
                    setUser(user);
                });
            } else {
                setUser(JSON.parse(userCookie.value));
            }
        }
    }, [user]);

    if (user) {
        return (
            <a className={styles.wrapper} onClick={handeLogout}>
                {user.fullName}  | Logout
            </a>
        );
    }

    return (
        <a className={styles.wrapper} onClick={handeLogin}>
            Login
        </a>
    );
};

export default LoginButton;
