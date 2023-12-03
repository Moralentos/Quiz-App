import React from 'react';
import Header from '../components/HeaderBlock/Header';
import styles from './layout.module.scss';
import ListPage from '../components/ListPageBlock/ListPage';

import data from '../data';

interface startChildren {
  children: React.ReactNode;
  pos: number;
  status: number;
}

const StartBlock: React.FC<startChildren> = ({ children, pos, status }) => {
  return (
    <>
      <Header></Header>
      <aside className='container'>
        {status === 1 && <ListPage elemList={data.questions.length} pos={pos}></ListPage>}
      </aside>
      <main className={`container ${styles.main}`}>{children}</main>
    </>
  );
};

export default StartBlock;
