import React from 'react';
// import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';

const NotFound = () => {
  const history = useHistory();
  setTimeout(() => {
    history.push('/');
  }, 1000);
  return (
    <div className="not-found">
      <h2>404</h2>
      <p>That page cannot be found</p>
    </div>

  );
};

export default NotFound;
