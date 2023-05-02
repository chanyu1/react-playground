import { Link } from 'react-router-dom';

export const Home = () => {
  return (
    <>
      <Link to="/ref">ref</Link>
      <br />
      <Link to="/context">context</Link>
      <br />
      <Link to="/storage">storage</Link>
      <br />
      <Link to="/memo">memo</Link>
      <br />
      <Link to="/callback">callback</Link>
    </>
  );
};
