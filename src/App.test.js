import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => { //descreve função que o app faz
  render(<App />);
  const linkElement = screen.getByText(/learn react/i); //permite procurar elementos na tela (texto, links,etc)
  expect(linkElement).toBeInTheDocument(); //verifica se é verdasdeiro
});
