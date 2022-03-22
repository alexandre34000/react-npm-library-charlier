import { render, screen } from '@testing-library/react';
import App from './App';

test('renders h1', () => {
  render(<App />);
  const linkElement = screen.getByText("Test des composants");
  expect(linkElement).toBeInTheDocument();
});
