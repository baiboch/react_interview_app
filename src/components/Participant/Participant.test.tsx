import React from 'react';
import {render, screen} from '@testing-library/react';
import Participant from '.';
import {ParticipantModel} from './model';

test('renders navbar title correct', () => {
    const participant: ParticipantModel = {
        name: 'Test',
        age: 1
    };
    render(<Participant participant={participant}/>);
    const linkElement = screen.getByText(/Test 1/i);
    expect(linkElement).toBeInTheDocument();
});
