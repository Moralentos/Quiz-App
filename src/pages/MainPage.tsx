import React from 'react';

import Layout from '../layouts/Layout';

import Content from '../components/ContentBlock/Content';
import StartContent from '../components/ContentBlock/StartContent';
import EndContent from '../components/ContentBlock/EndContent';

import data from '../data';
interface dataList {
  correctAnswer: string;
  options: string[];
  question: string;
}

interface AnswerListItem {
  myAnswer: string;
  correctAnswer: string;
}

interface voidType {
  changeAnswer: (questionIndex: number, answerIndex: string) => void;
}

export interface ContextType {
  answerList: AnswerListItem[][];
  changeAnswer: voidType['changeAnswer'];
}

export const Context = React.createContext<ContextType | null>(null);

const MainPage: React.FC = () => {
  const [pos, setPos] = React.useState<number>(0);
  const [status, setStatus] = React.useState<number>(0);
  const [isAnsweredStatus, setAnsweredStatus] = React.useState<boolean>(false);
  const [answerList, setAnswerList] = React.useState<AnswerListItem[][] | null>(null);

  const quizList: dataList[] = data.questions;

  React.useEffect(() => {
    if (status === 0) {
      const answers: AnswerListItem[][] = quizList.map((data) => [
        { myAnswer: '', correctAnswer: data.correctAnswer },
      ]);
      setAnswerList(answers);
    }

    // console.log(answerList);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [status]);
  // console.log(answerList);

  // let answerList: AnswerListItem[][] = [[]];
  // if (isRender === false) {
  //   answerList = quizList.map((data) => [{ myAnswer: '', correctAnswer: data.correctAnswer }]);
  //   console.log(answerList);

  //   setRender(true);
  // }

  const changeAnswer: voidType['changeAnswer'] = (questionIndex, answerIndex) => {
    answerList && (answerList[questionIndex][0].myAnswer = answerIndex);
  };

  const checkAnswer = (): number | undefined => {
    if (answerList) {
      const data = answerList.reduce((acc, answer) => {
        if (answer[0].myAnswer === '') {
          return acc + 1;
        } else return acc;
      }, 0);
      return data;
    }
  };

  const nextPage = (): void => {
    if (pos + 1 === quizList.length) {
      if (checkAnswer() === 0) {
        setStatus(2);
        setAnsweredStatus(false);
      } else {
        if (isAnsweredStatus === false) {
          setAnsweredStatus(!isAnsweredStatus);
        }
      }
    } else {
      setPos(pos + 1);
      if (isAnsweredStatus === true) {
        setAnsweredStatus(false);
      }
    }
  };
  console.log('STATUS=> ' + isAnsweredStatus);

  const prevPage = (): void => {
    if (pos + 1 === 1) {
      quizIsEnd();
      setAnsweredStatus(false);
    } else setPos(pos - 1);
    setAnsweredStatus(false);
  };

  const quizIsEnd = (): void => {
    setPos(0);
    setStatus(0);
  };

  const startQuiz = (): void => {
    status === 2 ? quizIsEnd() : setStatus(1);
  };

  if (!answerList) {
    return <div>Загрузка...</div>;
  }

  if (status === 0) {
    return (
      <Context.Provider value={{ answerList, changeAnswer }}>
        <Layout pos={pos} status={status}>
          <StartContent startQuiz={startQuiz} />
        </Layout>
      </Context.Provider>
    );
  }

  if (status === 1) {
    return (
      <Context.Provider value={{ answerList, changeAnswer }}>
        <Layout pos={pos} status={status}>
          <Content
            isAnsweredStatus={isAnsweredStatus}
            quizList={quizList}
            nextPage={nextPage}
            prevPage={prevPage}
            pos={pos}
          />
        </Layout>
      </Context.Provider>
    );
  }
  if (status === 2) {
    return (
      <Context.Provider value={{ answerList, changeAnswer }}>
        <Layout pos={pos} status={status}>
          <EndContent quizList={quizList} startQuiz={startQuiz}></EndContent>
        </Layout>
      </Context.Provider>
    );
  }
};

export default MainPage;
