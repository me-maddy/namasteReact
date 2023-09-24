const heading = React.createElement(
  "h1",
  { id: "heading" },
  "Now, it is created using react"
);
const heading2 = React.createElement(
  "h1",
  { id: "heading1" },
  "Now, it is created using react2"
);
const parent = React.createElement("div", {}, [
  React.createElement(
    "span",
    { id: "link" },
    React.createElement("a", {}, "It is a link to redirect you on your point")
  ),
  heading,
  heading2,
]);
console.log(heading);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
