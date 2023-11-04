import { render, screen } from "@testing-library/react";
import Header from "../Header";
import { Provider } from "react-redux";
import appStore from "../../utilities/appStore";
import { BrowserRouter as Router } from "react-router-dom";
import "@testing-library/jest-dom";

it("should load header component with link Contact", () => {
  render(
    <Router>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </Router>
  );

  const Contact = screen.getByRole("link", { name: "Contact" });
  expect(Contact).toBeInTheDocument();
});

it("should load header component with the value of cart", () => {
  render(
    <Router>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </Router>
  );

  const value = screen.getByRole("heading");
  expect(value).toBeInTheDocument();
});
