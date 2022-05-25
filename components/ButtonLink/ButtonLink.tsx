import React from 'react';

import styles from './ButtonLink.module.css';

interface Props {
    href: string;
    children: React.ReactNode;
}

const ButtonLink = ({ href, children }: Props) => (
    <a className={styles.wrapper} href={href}>
        {children}
    </a>
);

export default ButtonLink;
