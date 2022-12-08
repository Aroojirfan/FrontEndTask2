import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "../../store/store";
import BooksDetail from "./BooksDetail";
describe("Footer", () => {
  test(" Copyright Text present", () => {
    render(
      <Provider store={store}>
        <BooksDetail />
      </Provider>
    );
    const linkElement = screen.getByText(/ Book Detail/i);
    expect(linkElement).toBeInTheDocument();
  });
});