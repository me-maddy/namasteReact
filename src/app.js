import React from "react";
import ReactDOM from "react-dom/client";

const heading = React.createElement(
  "h1",
  { id: "heading" },
  "Now, Learn what matters!"
);

const heading1 = <h1 id="heading">Now, Learn what matters!</h1>;
// heading & heading1 are both similar

const heading2 = React.createElement(
  "h1",
  { id: "heading1" },
  "Hey there! I am Madan and here by teach you basics of react!"
);

const heading3 = (
  <h1 id="heading1">
    Hey there! I am Madan and here by teach you basics of react!
  </h1>
);
// heading2 & heading3 are both similar

const parent = React.createElement("div", { className: "header" }, [
  React.createElement(
    "span",
    { id: "link" },
    React.createElement("a", {}, "It is a link to redirect you on your point")
  ),
  heading,
  heading2,
]);

const parent1 = (
  <div className="header">
    <span id="link">
      <a>It is a link to redirect you on your point</a>
    </span>
    {heading1}
    {heading3}
  </div>
);
// parent & parent1 are similar

// React Component
const AppComponent = () => (
  <>
    {parent}
    {parent1}
  </>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppComponent />);
