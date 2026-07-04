import { render, screen } from '@testing-library/react';
import App from './App';

jest.mock('react-chartjs-2', () => ({
  Doughnut: () => <div data-testid="skill-chart" />,
}));

test('renders portfolio site heading', () => {
  render(<App />);
  expect(screen.getByText(/OGAWA SATORUの/i)).toBeInTheDocument();
  expect(screen.getByRole('heading', { name: /経験スキルについて/i })).toBeInTheDocument();
});
