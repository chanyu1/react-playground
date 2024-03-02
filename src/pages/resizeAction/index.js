import { useEffect, useRef, useState } from 'react';

export const ResizeAction = () => {
  // const wrapperRef = useRef<HTMLDivElement>(null);
  const wrapperRef = useRef(null);
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const resizeAction = () => {
      if (!wrapperRef.current) return;
      setWidth(wrapperRef.current.getBoundingClientRect().width);
    };
    resizeAction();
    // const listener = (_event: UIEvent) => {
    const listener = (_event) => {
      resizeAction();
    };
    window.addEventListener('resize', listener);
    return () => {
      window.removeEventListener('resize', listener);
    };
  }, []);

  return <div ref={wrapperRef}>ResizeAction: {width}</div>;
};
