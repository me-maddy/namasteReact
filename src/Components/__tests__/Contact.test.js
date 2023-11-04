import { render, screen } from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom";

describe("Contact Us page", () => {
  test("Let's check the loading of contact component", () => {
    render(<Contact />);
    const heading = screen.getAllByRole("heading");
    expect(heading[0]).toBeInTheDocument();
  });

  test("should button load in the document", () => {
    render(<Contact />);
    const button = screen.getByText("Submit feedback");
    expect(button).toBeInTheDocument();
  });

  test("should input load in the document", () => {
    render(<Contact />);
    const input = screen.getAllByRole("textbox");

    expect(input.length).not.toBe(4);
  });
});
