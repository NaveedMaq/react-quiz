import { createRoot } from 'react-dom/client';
import { StrictMode } from 'react';
import './index.css';
import App from './components/App';
import { QuizProvider } from './contexts/QuizContext';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);
root.render(
  <StrictMode>
    <QuizProvider>
      <App />
    </QuizProvider>
  </StrictMode>
);
