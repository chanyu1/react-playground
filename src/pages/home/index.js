import { Link } from 'react-router-dom';

export const Home = () => {
  return (
    <>
      <Link to="/ref">ref</Link>
      <br />
      <Link to="/context">useContext</Link>
      <br />
      <Link to="/storage">storage</Link>
      <br />
      <Link to="/memo">useMemo</Link>
      <br />
      <Link to="/callback">useCallback</Link>
      <br />
      <Link to="/customhook">customHook</Link>
    </>
  );
};
