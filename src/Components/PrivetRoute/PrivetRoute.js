import React from "react";
import { Route, Redirect } from "react-router-dom";
export const PrivateRoute = ({ children, ...rest }) => {
  const a = document.cookie;
  console.log(a);
  return (
    <Route
      {...rest}
      render={({ location }) =>
        a ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
};
