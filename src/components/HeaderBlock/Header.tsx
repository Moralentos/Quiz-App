import React from 'react';
import styles from './header.module.scss';

const Header: React.FC = () => {
  return (
    <header className={`container ${styles.header}`}>
      <h1 className={styles.h1}>Quiz App</h1>
    </header>
  );
};

export default Header;
