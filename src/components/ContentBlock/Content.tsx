import React, { ReactNode } from 'react';
import styles from './content.module.scss';
import { Context, ContextType } from '../../pages/MainPage';

interface propsContent {
  nextPage: () => void;
  prevPage: () => void;
  quizList: {
    correctAnswer: string;
    options: string[];
    question: string;
  }[];
  pos: number;
  isAnsweredStatus: boolean;
}

const Content: React.FC<propsContent> = ({
  quizList,
  nextPage,
  prevPage,
  pos,
  isAnsweredStatus,
}) => {
  console.log(quizList);
  const context = React.useContext(Context);
  const [activeButton, setActiveButton] = React.useState<number | null>(null);

  if (!context) {
    return <div>Загрузка...</div>;
  }

  const { answerList, changeAnswer } = context;

  if (activeButton !== null) setActiveButton(null);

  const handleAnswer = (pos: number, answ: string, index: number): void => {
    changeAnswer(pos, answ);
    setActiveButton(index);
    console.log(answerList);
  };

  const handleWarnClass = (): string => {
    if (isAnsweredStatus === false) {
      return `${styles.warn}`;
    } else return `${styles.warn} ${styles.warn__active}`;
  };

  console.log(handleWarnClass());

  // console.log(`CHECK QUIZLIST =>   ${quizList[pos]}`);
  // console.log(`CHECK POS =>   ${pos}`);
  // console.log(`CHECK BUTTON =>   ${activeButton}`);

  return (
    <>
      <h2>Вопрос {pos + 1}</h2>
      <p>{quizList[pos].question}</p>
      <div className={styles.buttons}>
        <div className={styles.buttons__first}>
          {quizList[pos].options.map((data, index) => (
            <button
              className={data === answerList[pos][0].myAnswer ? styles.btn__active : styles.btn}
              onClick={() => handleAnswer(pos, data, index)}
              key={index}
            >
              {data}
            </button>
          ))}

          {/* <button>{quizList[pos].options[1]}</button>
          <button>{quizList[pos].options[2]}</button>
          <button>{quizList[pos].options[3]}</button> */}
        </div>
      </div>

      <div className={styles.nav}>
        <button onClick={() => prevPage()}>{pos + 1 === 1 ? 'Выйти' : 'Назад'}</button>
        <button onClick={() => nextPage()}>
          {pos + 1 === quizList.length ? 'Завершить' : 'Следующий'}
        </button>
      </div>
      <div className={handleWarnClass()}>Вы ответили не на все вопросы!</div>
    </>
  );
};

export default Content;
