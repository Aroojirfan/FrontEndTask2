import { render, screen } from '@testing-library/react';
import Navbar from './Navbar';


describe("Header", () => {
  test('  Text present', () => {
    render(<Navbar />);
    const linkElement = screen.getByText(/BookShelf/i);
    expect(linkElement).toBeInTheDocument();
  });
  test('Placeholder of search should be present', () => {
    render(<Navbar />);
    const linkElement = screen.getByPlaceholderText(/Search…/i);
    expect(linkElement).toBeInTheDocument();
  });
  
})
