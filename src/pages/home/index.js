import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <>
      <div>
        <Link to="/ref">ref</Link>
      </div>
      <div>
        <Link to="/context">context</Link>
      </div>
    </>
  );
};
