import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Page from "../page";

describe("Home", () => {
  it("h1 태그를 렌더링한다.", () => {
    render(<Page />);

    const heading = screen.getByRole("heading", {
      name: /Tailwind Test/i,
    });

    expect(heading).toBeInTheDocument();
  });
});
