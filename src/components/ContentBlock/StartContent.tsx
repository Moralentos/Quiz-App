import React from 'react';
import styles from './startContent.module.scss';

interface startContentProps {
  startQuiz: () => void;
}

const StartContent: React.FC<startContentProps> = ({ startQuiz }) => {
  return (
    <>
      <h2>Викторина с вопросами</h2>
      <div className={styles.start_button}>
        <button onClick={() => startQuiz()} className={styles.button}>
          Начать игру
        </button>
      </div>
    </>
  );
};

export default StartContent;
