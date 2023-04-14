import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";

export const ContextPage = () => {
  const data = useContext(ThemeContext);

  return (
    <>
      <div style={{ color: data.isDark ? "black" : "red" }}>color</div>
      <button onClick={() => data.setIsDark(!data.isDark)}>click</button>
    </>
  );
};
