import {render, screen} from '@testing-library/react';
import user from '@testing-library/user-event';
import ParticipantForm from '.';

describe('TestParticipantForm test form callback fun', () => {
    const onSubmit = jest.fn();

    beforeEach(() => {
        onSubmit.mockClear();
    });

    it('test form callback', () => {
        onSubmit.mockClear();
        render(<ParticipantForm addParticipantCallback={onSubmit}/>);

        user.type(getParticipantName(), 'Test');
        user.type(getParticipantAge(), '1');
        user.click(screen.getByText('Submit'));

        expect(onSubmit).toHaveBeenCalled();
        expect(onSubmit).toBeCalledTimes(1);
    });
});

function getParticipantName() {
    return screen.getByPlaceholderText('Name...');
}

function getParticipantAge() {
    return screen.getByPlaceholderText('Age... (digits only)');
}


