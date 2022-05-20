import {FC} from 'react';
import {ParticipantModel} from './model';

const Participant: FC<{participant: ParticipantModel}> = ({participant}) => {
    return (
        <>
            <div className="container">
                Name: {participant.name} Age: {participant.age}
            </div>
        </>
    );
}
export default Participant;