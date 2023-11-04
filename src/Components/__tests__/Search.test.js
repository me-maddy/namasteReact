import Body from "../Body";
import { act } from "react-dom/test-utils";
import { fireEvent, render, screen } from "@testing-library/react";
import Mock_Data from "../../Mocks/mockResBody.json";
import { BrowserRouter as Router } from "react-router-dom";
import "@testing-library/jest-dom";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(Mock_Data);
    },
  });
});

it("should check the search functionality", async () => {
  await act(async () =>
    render(
      <Router>
        <Body />
      </Router>
    )
  );
  const resCardBeforeSearch = screen.getAllByTestId("resCard");
  expect(resCardBeforeSearch.length).toBe(20);
  const searchBox = screen.getByRole("searchbox");
  const searchBtn = screen.getByTestId("searchicon");
  fireEvent.change(searchBox, { target: { value: "pizza" } });
  fireEvent.click(searchBtn);
  const resCard = screen.getAllByTestId("resCard");
  expect(resCard.length).toBe(4);
});

it("should load top rated cards", async () => {
  await act(async () =>
    render(
      <Router>
        <Body />
      </Router>
    )
  );

  const topratedbutton = screen.getByRole("button", { name: "Top Rated" });
  fireEvent.click(topratedbutton);
  const topResCards = screen.getAllByTestId("resCard");
  expect(topResCards.length).toBe(9);
});
