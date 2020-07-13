import React, { useEffect, useState } from 'react';
import { Route, Redirect } from 'react-router-dom';
import axios from 'axios';

function App(props) {
  const [error, setError] = useState(false);

  useEffect(() => {
    axios({
      method: 'POST',
      url: `http://localhost:3000/api/users${props.pathBack}`,
      headers: {
        Authorization: `Bearer ' ${localStorage.getItem('token')}`,
      },
    })
      .then((response) => response.data)
      .then((data) =>
        localStorage.setItem('profile', JSON.stringify(data.user.result))
      )
      .catch((error) => setError(true));
  }, []);

  if (localStorage.getItem('token') === null) {
    return <Redirect to="/" />;
  }

  return <Route path={props.pathReact} component={props.component} />;
}

export default App;
