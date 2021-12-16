import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders template name', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/Stracciatella/i);
  expect(linkElement).toBeInTheDocument();
});
