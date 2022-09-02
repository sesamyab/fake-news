import React from 'react';
import Script from 'next/script';
import Head from 'next/head';
import Link from 'next/link';
import Logo from '../Logo/Logo';
import { useRouter } from 'next/router';

import LoginButton from '../LoginButton/LoginButton';
import styles from './Layout.module.css';

import { webComponentBaseUrl } from '../../constants';

interface Props {
    children: React.ReactNode;
}

enum Variant {
    Picture = 'picture',
    Logout = 'logout',
    SesamyText = 'sesamy-text',
}

interface SesamyContentContainerProps
    extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> {
    gradient?: boolean;
    pass?: string;
}

interface SesamyButtonContainerProps
    extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> {
    imageSrc: string;
    description: string;
}

interface SesamyButtonProps
    extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> {
    text?: string;
    price?: number;
    currency?: string;
    pass?: string;
    'hide-button'?: string;
}

interface ContentListingProps
    extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> {
    itemSrc: string;
    publisherProductID: string;
}

interface SesamyLoginProps
    extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> {
    variant?: Variant.Logout | Variant.Picture | Variant.SesamyText;
}

interface SesamyLogoutProps
    extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> {}

interface SesamyLockedContentContainerProps
    extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> {
    'publisher-content-id'?: string;
    'item-src'?: string;
    pass?: string;
}

declare global {
    namespace JSX {
        interface IntrinsicElements {
            'sesamy-content-container': SesamyContentContainerProps;
            'sesamy-button-container': SesamyButtonContainerProps;
            'sesamy-button': SesamyButtonProps;
            'sesamy-content-listing': ContentListingProps;
            'sesamy-login': SesamyLoginProps;
            'sesamy-logout': SesamyLogoutProps;
            'sesamy-profile': React.DetailedHTMLProps<
                React.HTMLAttributes<HTMLElement>,
                HTMLElement
            >;
            'sesamy-entitlements': React.DetailedHTMLProps<
                React.HTMLAttributes<HTMLElement>,
                HTMLElement
            >;
            'sesamy-locked-content-container': SesamyLockedContentContainerProps;
        }
    }
}

const Layout = ({ children }: Props) => {
    const { pathname } = useRouter();

    return (
        <div className={styles.wrapper}>
            <header className={pathname !== '/' ? styles.header : styles.headerHome}>
                <div className={styles.headerContent}>
                    <Link href="/">
                        <div className={styles.logoWrapper}>
                            <Logo height={80} color={pathname !== '/' ? '#030303' : '#f3f3f3'} />
                        </div>
                    </Link>

                    <div>
                        <LoginButton />
                    </div>
                </div>
            </header>

            <main className={styles.content}>{children}</main>
            <Script defer src={`${webComponentBaseUrl}/sesamy-bundle.min.js`} />
            <Head>
                <meta property="sesamy:client-id" content="sesamy" />
            </Head>
        </div>
    );
};

export default Layout;
