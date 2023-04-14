import { useEffect, useRef } from "react";

export const ReactRef = () => {
  const inputRef = useRef();

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const login = () => {
    alert(`hello ${inputRef.current.value}!`);
    inputRef.current.focus();
  };

  console.log("render...");

  return (
    <div>
      <input ref={inputRef} type="text" placeholder="username" />
      <button onClick={login}>login</button>
    </div>
  );
};
