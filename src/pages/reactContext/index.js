import { useState } from 'react';
import { ContextPage } from './ContextPage';
import { ThemeContext } from '../../context/ThemeContext';

export const ReactContext = () => {
  const [isDark, setIsDark] = useState(false);

  return (
    <ThemeContext.Provider value={{ isDark, setIsDark }}>
      <ContextPage />
    </ThemeContext.Provider>
  );
};
