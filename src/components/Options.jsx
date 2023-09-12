import React from 'react';
import { useQuiz } from '../contexts/QuizContext';

export default function Options() {
  const { question, answer, dispatch } = useQuiz();
  const hasAnswered = answer !== null;
  return (
    <div className='options'>
      {question.options.map((option, index) => (
        <button
          className={`btn btn-option ${index === answer ? 'answer' : ''} ${
            hasAnswered
              ? index === question.correctOption
                ? 'correct'
                : 'wrong'
              : ''
          }`}
          disabled={hasAnswered}
          onClick={() => dispatch({ type: 'newAnswer', payload: index })}
          key={option}
        >
          {option}
        </button>
      ))}
    </div>
  );
}
