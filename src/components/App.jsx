import { useEffect } from 'react';

import Header from './Header';
import Loader from './Loader';
import Error from './Error';
import Main from './Main';
import StartScreen from './StartScreen';
import Question from './Question';
import NextQuestion from './NextQuestion';
import Progress from './Progress';
import FinishedScreen from './FinishedScreen';
import Footer from './Footer';
import Timer from './Timer';
import { useQuiz } from '../contexts/QuizContext';

export default function App() {
  const { dispatch, status } = useQuiz();

  useEffect(function () {
    fetch('http://localhost:8000/questions')
      .then((res) => res.json())
      .then((data) => dispatch({ type: 'dataReceived', payload: data }))
      .catch((_) => dispatch({ type: 'dataFailed' }));
  }, [dispatch]);

  return (
    <div className='app'>
      <Header />
      <main className='main'>
        <Main>
          {status === 'loading' && <Loader />}
          {status === 'error' && <Error />}
          {status === 'ready' && <StartScreen />}
          {status === 'active' && (
            <>
              <Progress />
              <Question />
              <Footer>
                <Timer />
                <NextQuestion />
              </Footer>
            </>
          )}
          {status === 'finished' && <FinishedScreen />}
        </Main>
      </main>
    </div>
  );
}
