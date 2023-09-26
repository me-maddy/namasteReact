import React from "react";
import ReactDOM from "react-dom/client";

const heading = React.createElement(
  "h1",
  { id: "heading" },
  "Now, Learn what matters!"
);
const heading2 = React.createElement(
  "h1",
  { id: "heading1" },
  "Hey there! I am Madan and here by teach you basics of react!"
);
const parent = React.createElement("div", { className: "header" }, [
  React.createElement(
    "span",
    { id: "link" },
    React.createElement("a", {}, "It is a link to redirect you on your point")
  ),
  heading,
  heading2,
]);
console.log(parent);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
