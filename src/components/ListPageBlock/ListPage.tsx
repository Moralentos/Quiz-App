import React from 'react';
import styles from './listPage.module.scss';

interface listPageProps {
  elemList: number;
  pos: number;
}

const ListPage: React.FC<listPageProps> = ({ elemList, pos }) => {
  const arrayList: number[] = Array.from({ length: elemList }, (_, index) => index);
  console.log(pos);

  return (
    <div className={styles.list}>
      {arrayList.map((_, index) => {
        if (index === 0) {
          return (
            <div className={styles.list_right} key={index}>
              <div
                className={index <= pos ? styles.list_right__circle : styles.nonActiveLine}
              ></div>
              <div
                className={index <= pos ? styles.list_right__line : styles.nonActiveCircle}
              ></div>
            </div>
          );
        }
        if (index > 0 && index < arrayList.length - 1) {
          return (
            <div className={styles.list_full} key={index}>
              <div className={index <= pos ? styles.list_full__line : styles.nonActiveLine}></div>
              <div
                className={index <= pos ? styles.list_full__circle : styles.nonActiveCircle}
              ></div>
              <div className={index <= pos ? styles.list_full__line : styles.nonActiveLine}></div>
            </div>
          );
        }

        if (index === arrayList.length - 1) {
          return (
            <div className={styles.list_left} key={index}>
              <div
                className={index <= pos ? styles.list_right__line : styles.nonActiveLineLeft}
              ></div>
              <div
                className={index <= pos ? styles.list_right__circle : styles.nonActiveCircle}
              ></div>
            </div>
          );
        }
      })}
    </div>
  );
};

export default ListPage;
