import {render, screen} from "@testing-library/react";
import Copyright from "./Copyright";
import '@testing-library/jest-dom';

describe('<Copyright /> tests', () => {
  it('should pass', () => {
    expect(true).toBe(true);
  });

  it('should be true when company name equal', () => {
    const companyName = "Test Company";
    render(<Copyright companyName={companyName} />);

    const currentYear = new Date().getFullYear().toString();
    screen.debug();

    expect(screen.getByText(`Copyright © `)).toBeInTheDocument();
    expect(screen.getByText(companyName)).toBeInTheDocument();
    expect(screen.getByText(currentYear)).toBeInTheDocument();
    expect(screen.getByText('.')).toBeInTheDocument();

    // Testez également le lien
    const linkElement = screen.getByRole('link');
    expect(linkElement).toHaveAttribute('href', 'https://mui.com/');
  });

});
