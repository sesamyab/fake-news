import React, {FC} from "react";
import Image from 'next/image';
import Link from "next/link";

import styles from './Layout.module.css';

const Layout: FC = ({ children }) => (
  <div className={styles.wrapper}>
    <header className={styles.header}>
      <div className={styles.imageWrapper}>
        <Link href="/">
          <Image src="/logo.png" alt="Kvartal" width="140" height="100" />
        </Link>
      </div>
    </header>

    <main className={styles.content}>
      {children}
    </main>
  </div>
)

export default Layout