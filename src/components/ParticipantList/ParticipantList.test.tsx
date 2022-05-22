import {render, screen} from '@testing-library/react';
import ParticipantList from '.';
import {ParticipantModel} from '../Participant/model';

test('renders navbar title correct', () => {
    const participantList: ParticipantModel[] = [
        {name: 'Test', age: 1},
        {name: 'Test 2', age: 2},
    ];
    render(<ParticipantList data={participantList}/>);

    const participantRowOne = screen.getByText(/Test 1/i);
    expect(participantRowOne).toBeInTheDocument();

    const participantRowTwo = screen.getByText(/Test 2 2/i);
    expect(participantRowTwo).toBeInTheDocument();
});
