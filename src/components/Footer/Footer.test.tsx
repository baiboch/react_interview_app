import React from 'react';
import { render, screen } from '@testing-library/react';
import Footer from '.';

test('renders check footer current date value', () => {
    const dateCurr = (new Date()).toDateString();
    render(<Footer />);
    const linkElement = screen.getByText(dateCurr);
    expect(linkElement).toBeInTheDocument();
});
