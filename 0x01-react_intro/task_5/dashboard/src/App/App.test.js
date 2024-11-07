import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});


test('App renders a div with the class App-header', () => {
  const { getByTestId } = render(<App />);
  const appHeader = getByTestId('App-header');
  expect(appHeader).toBeInTheDocument();
});

test('App renders a div with the class App-body', () => {
  const { getByTestId } = render(<App />);
  const appBody = getByTestId('App-body');
  expect(appBody).toBeInTheDocument();
});

test('App renders a div with the class App-footer', () => {
  const { getByTestId } = render(<App />);
  const appFooter = getByTestId('App-footer');
  expect(appFooter).toBeInTheDocument();
});