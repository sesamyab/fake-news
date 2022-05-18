import React, {FC} from "react";

import styles from './Layout.module.css';


const Layout: FC = ({ children }) => (
  <div className={styles.wrapper}>
    <header className={styles.header}>
      <h1>Kavtal</h1>
    </header>

    <main className={styles.content}>
      {children}
    </main>
  </div>
)

export default Layout