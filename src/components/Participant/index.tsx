import {FC} from 'react';
import {ParticipantModel} from './model';

const Participant: FC<{participant: ParticipantModel}> = ({participant}) => {
    return (
        <p className="lead">{participant.name} {participant.age}</p>
    );
}
export default Participant;