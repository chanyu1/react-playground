import { useState, useEffect } from 'react';

export const Box = ({ createBoxStyle }) => {
  const [style, setStyle] = useState({});

  useEffect(() => {
    console.log('Box size up');
    setStyle(createBoxStyle());
  }, [createBoxStyle]);

  return <div style={style} />;
};
