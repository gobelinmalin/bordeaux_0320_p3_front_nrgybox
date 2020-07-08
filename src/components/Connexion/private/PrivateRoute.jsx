import React, { useEffect } from "react";
import { Route } from "react-router-dom";
import axios from "axios";

function App({ pathBack, pathReact, component }) {
  useEffect(() => {
    axios({
      method: "post",
      url: `http://localhost:3000/api/users/${pathBack}`,
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token")
      }
    })
      .then((response) => response.data)
      .then((data) => localStorage.setItem("profile", JSON.stringify(data.user.result)));
  }, []);

  // if(err) {
  //   history.push(/signup)
  // }

  return <Route path={pathReact} component={component} />;
}

export default App;