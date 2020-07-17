import React, { useEffect, useState } from 'react';
import { Route, Redirect } from 'react-router-dom';
import axios from 'axios';

function App(props) {
  const [error, setError] = useState(false);
  const [profile, setProfile] = useState({});

  useEffect(() => {
    axios({
      method: 'post',
      url: `http://process.env.REACT_APP_SERVER/api/users${props.pathBack}`,
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token")
      },
    })
      .then((response) => response.data)
      .then((data) => setProfile(data.user[0]))
      .catch(error => setError(true));
  }, []);


  if (localStorage.getItem('token') === null) {
    return <Redirect to="/" />;
  }


  return (
    <Route
      path={props.pathReact}
      component={props.component}
      profile={profile}
    />
  );
}

export default App;
