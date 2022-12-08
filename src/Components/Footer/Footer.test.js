import { render, screen } from "@testing-library/react";
import Footer from "./Footer";
import FooterItems from "./FooterItems";
describe("Footer", () => {
  test(" Copyright Text present", () => {
    render(<Footer />);
    const linkElement = screen.getByText(/Assignment 1/i);
    expect(linkElement).toBeInTheDocument();
  });
  it("Footerlink 1st item should be present", async () => {
    render(<FooterItems />);
    const followerDivElement = await screen.findByTestId(`footer-item-1`);
    expect(followerDivElement).toBeInTheDocument();
  });
  it("Footerlink fourth item should be present", async () => {
    render(<FooterItems />);
    const followerDivElement = await screen.findByTestId(`footer-item-4`);
    expect(followerDivElement).toBeInTheDocument();
  });
});

