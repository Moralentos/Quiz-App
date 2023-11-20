import React from 'react';
import styles from './endContent.module.scss';
import { Context } from '../../pages/MainPage';

interface EndContentProps {
  quizList: {
    correctAnswer: string;
    options: string[];
    question: string;
  }[];
  startQuiz: () => void;
}

const EndContent: React.FC<EndContentProps> = ({ quizList, startQuiz }) => {
  const context = React.useContext(Context);

  if (!context) {
    return <div>Загрузка...</div>;
  }

  const { answerList } = context;
  console.log(quizList);

  const calcAnswers = answerList.reduce((acc, answer) => {
    if (answer[0].myAnswer === answer[0].correctAnswer) {
      return acc + 1;
    } else return acc;
  }, 0);

  const handleClass = (elem: string, id: number) => {
    const userAnswer = answerList[id][0]?.myAnswer;
    const correctAnswer = answerList[id][0]?.correctAnswer;

    console.log(
      `ELEM=${elem} :: correctAnswer: ${correctAnswer} :: userAnswer: ${userAnswer} :: index: ${id}`,
    );

    if (elem === correctAnswer && elem === userAnswer) {
      return `${styles.option} ${styles.active}`;
    }
    if (elem === correctAnswer && elem !== userAnswer) {
      return `${styles.option} ${styles.active}`;
    }
    if (elem !== correctAnswer && elem === userAnswer) {
      return `${styles.option} ${styles.nonActive}`;
    } else {
      return `${styles.option}`;
    }
  };

  return (
    <>
      <h2>
        Вы ответили на {calcAnswers} из {quizList.length} вопросов
      </h2>
      <div className={styles.bottom_line}></div>
      {quizList.map((data, index) => (
        <div key={index} className={styles.answer_block}>
          <h3>Вопрос {index + 1}</h3>
          <p>{data.question}</p>
          <div className={styles.answers}>
            {data.options.map((elem, id) => {
              return (
                <div key={id} className={handleClass(elem, index)}>
                  {elem}
                </div>
              );
            })}
            {/* <div className={styles.option}>Desc 1</div>
            <div className={styles.option}>Desc 2</div>
            <div className={`${styles.option} ${styles.active}`}>Desc 3</div>
            <div className={styles.option}>Desc 4</div> */}
          </div>
        </div>
      ))}
      <div className={styles.bottom_endContent}>
        <button onClick={() => startQuiz()}>Выйти</button>
      </div>
    </>
  );
};

export default EndContent;
