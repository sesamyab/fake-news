import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useUser } from '@auth0/nextjs-auth0';

import LoginButton from '../LoginButton/LoginButton';
import styles from './Layout.module.css';

interface Props {
    children: React.ReactNode;
}

const Layout = ({ children }: Props) => {
    const { user } = useUser();

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
                        <LoginButton/>
                    </div>
                </div>
            </header>

            <main className={styles.content}>{children}</main>
        </div>
    );
};

export default Layout;
