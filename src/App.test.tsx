import { render, screen } from '@testing-library/react';
import App from './App';

test('renders ToDo App header', () => {
    render(<App />);
    const headerElement = screen.getByText(/ToDo App/i);
    expect(headerElement).toBeInTheDocument();
});