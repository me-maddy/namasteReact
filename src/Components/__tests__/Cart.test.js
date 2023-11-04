import { act } from "react-dom/test-utils";
import Menu from "../Restaurant/Menu";
import Header from "../Header";
import Cart from "../Cart";
import Menu_Data from "../../Mocks/menuMocks.json";
import { fireEvent, render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import appStore from "../../utilities/appStore";
import "@testing-library/jest-dom";

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve(Menu_Data),
  })
);

it("should update the cart", async () => {
  await act(async () =>
    render(
      <Provider store={appStore}>
        <Router>
          <Header />
          <Menu />
          <Cart />
        </Router>
      </Provider>
    )
  );
  const cartcountbefore = screen.getByRole("heading", { name: "0" });
  expect(cartcountbefore).toBeInTheDocument();
  const addbtn = screen.getAllByText("ADD");
  fireEvent.click(addbtn[0]);
  // const cartcountafter = screen.getByTestId("cartcount", { name: "1" });
  // expect(cartcountafter).toBeInTheDocument();
  const cartitem = screen.getAllByTestId("cartitem");
  expect(cartitem.length).toBe(1);
});
