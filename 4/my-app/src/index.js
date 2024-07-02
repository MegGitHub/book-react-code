import ReactDOM from "react-dom/client";
import { Fragment } from "react";

const App = () => {
  return (
    <Fragment>
      <h1>Hello, React!</h1>
      <p>How are you?</p>
    </Fragment>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);