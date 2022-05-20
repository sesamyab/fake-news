import React, { FC } from 'react';

import styles from './ButtonLink.module.css';

interface Props {
    href: string;
}

const ButtonLink: FC<Props> = ({ children, href }) => (
    <a className={styles.wrapper} href={href}>
        {children}
    </a>
);

export default ButtonLink;
