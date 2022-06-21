import React from 'react';
import Image from 'next/image';
import Script from 'next/script';
import Link from 'next/link';

import LoginButton from '../LoginButton/LoginButton';
import styles from './Layout.module.css';

import { NEXT_PUBLIC_WEB_COMPONENT_BASE_URL } from '../../constants';

interface Props {
    children: React.ReactNode;
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
    text: string;
    price: number;
    currency: string;
    pass?: string;
}

interface SesamyLoginProps
    extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> {
    'client-id': string;
}

declare global {
    namespace JSX {
        interface IntrinsicElements {
            'sesamy-content-container': SesamyContentContainerProps;
            'sesamy-button-container': SesamyButtonContainerProps;
            'sesamy-button': SesamyButtonProps;
            'sesamy-login': SesamyLoginProps;
            'sesamy-profile': React.DetailedHTMLProps<
                React.HTMLAttributes<HTMLElement>,
                HTMLElement
            >;
            'sesamy-entitlements': React.DetailedHTMLProps<
                React.HTMLAttributes<HTMLElement>,
                HTMLElement
            >;
        }
    }
}

const Layout = ({ children }: Props) => {
    return (
        <div className={styles.wrapper}>
            <header className={styles.header}>
                <div className={styles.headerContent}>
                    <div className={styles.logoWrapper}>
                        <Link href="/">
                            <Image src="/logo.png" alt="Kvartal" layout="fill" objectFit="cover" />
                        </Link>
                    </div>
                    <div>
                        <LoginButton />
                    </div>
                </div>
            </header>

            <main className={styles.content}>{children}</main>
            <Script defer src={`${NEXT_PUBLIC_WEB_COMPONENT_BASE_URL}/sesamy-bundle.min.js`} />
        </div>
    );
};

export default Layout;
