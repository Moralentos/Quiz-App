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
              <div className={styles.circle_block}>
                <div
                  className={index <= pos ? styles.list_right__circle : styles.nonActiveLine}
                ></div>
              </div>
              <div className={styles.line_block}>
                <div
                  className={index <= pos ? styles.line_block__line : styles.nonActiveCircle}
                ></div>
              </div>
            </div>
          );
        }
        if (index > 0 && index < arrayList.length - 1) {
          return (
            <div className={styles.list_full} key={index}>
              <div className={styles.line_block}>
                <div
                  className={index <= pos ? styles.line_block__line : styles.nonActiveLine}
                ></div>
              </div>
              <div className={styles.circle_block}>
                <div
                  className={index <= pos ? styles.list_full__circle : styles.nonActiveCircle}
                ></div>
              </div>
              <div className={styles.line_block}>
                <div
                  className={index <= pos ? styles.line_block__line : styles.nonActiveLine}
                ></div>
              </div>
            </div>
          );
        }

        if (index === arrayList.length - 1) {
          return (
            <div className={styles.list_left} key={index}>
              <div className={styles.line_block}>
                <div
                  className={index <= pos ? styles.line_block__line : styles.nonActiveLineLeft}
                ></div>
              </div>
              <div className={styles.circle_block}>
                <div
                  className={index <= pos ? styles.list_left__circle : styles.nonActiveCircle}
                ></div>
              </div>
            </div>
          );
        }
      })}
    </div>
  );
};

export default ListPage;
