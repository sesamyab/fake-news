import React, { FC } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useUser } from '@auth0/nextjs-auth0';

import ButtonLink from '../ButtonLink/ButtonLink';
import styles from './Layout.module.css';

const Layout: FC = ({ children }) => {
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

                    {Boolean(user) ? (
                        <div className={styles.profileWrapper}>
                            <p>Hi {user?.given_name}!</p> /
                            <ButtonLink href="/api/auth/logout">Logout</ButtonLink>
                        </div>
                    ) : (
                        <ButtonLink href="/api/auth/login">Login</ButtonLink>
                    )}
                </div>
            </header>

            <main className={styles.content}>{children}</main>
        </div>
    );
};

export default Layout;
