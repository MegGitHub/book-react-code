

import ReactDOM from "react-dom/client";

const App = () => {
  return (
    <div>
      <h1>Hello, React!</h1>
      <p>How are you?</p>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);