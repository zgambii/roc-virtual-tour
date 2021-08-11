import { render, screen } from '@testing-library/react';
import NavigationBar from './NavigationBar';

test('renders learn react link', () => {
  render(<NavigationBar />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
