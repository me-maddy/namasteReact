import { render, screen } from "@testing-library/react";
import RestaurantCart from "../RestaurantCart";
import Mock_Data from "../../Mocks/resCardMock.json";
import "@testing-library/jest-dom";
import { BrowserRouter as Router } from "react-router-dom";

it("should load restaurant card", () => {
  render(
    <Router>
      <RestaurantCart info={Mock_Data} />
    </Router>
  );
  const title = screen.getByText("Bhawna Sweets");
  expect(title).toBeInTheDocument();
});
