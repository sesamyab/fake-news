import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import LoginButton from '../LoginButton/LoginButton';
import styles from './Layout.module.css';

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
            'sesamy-purchases': React.DetailedHTMLProps<
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
        </div>
    );
};

export default Layout;
