import React from 'react';
import { render, screen } from '@testing-library/react';
import NavBar from '.';

test('renders navbar title correct', () => {
    render(<NavBar />);
    const linkElement = screen.getByText('Interview participants');
    expect(linkElement).toBeInTheDocument();
});
