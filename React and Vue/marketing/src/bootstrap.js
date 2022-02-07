import React from "react";
import ReactDOM from "react-dom";

//* Mount Function to start up the app

const mount = (el) => {
  ReactDOM.render(<h1>Hi There</h1>, el);
};
//* If we are in development and in isolatio,
//* call mount immediately

if (process.env.NODE_ENV === "development") {
  const devRoot = document.querySelector("#_marketing-dev-root");
  if (devRoot) {
    mount(devRoot);
  }
}

//* We are running through container
//* and we should export the mount function

export { mount };
