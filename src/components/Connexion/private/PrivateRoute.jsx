import React, { useEffect, useState } from "react";
import { Route, Redirect } from "react-router-dom";
import axios from "axios";

function App(props) {
  const [ error, setError ] = useState(false);
  useEffect(() => {
    axios({
      method: "post",
      url: `http://localhost:3000/api/users${props.pathBack}`,
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token")
      }
    })
      .then((response) => response.data)
      .then((data) => localStorage.setItem("profile", JSON.stringify(data.user.result)))
      .catch(error => setError(true));
  }, []);

  /*if(error) {
    return <Redirect to='/login'/>
  } */

  console.log(props)
  return <Route path={props.pathReact} component={props.component} />;
}

export default App;