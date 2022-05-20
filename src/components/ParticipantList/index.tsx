import {FC} from 'react';
import {ParticipantModel} from '../Participant/model';
import Participant from '../Participant';

const ParticipantList: FC<{ data: ParticipantModel[] }> = ({data}) => {
    return (
        <>{data.map((item: ParticipantModel, index) => <Participant key={index} participant={item}/>)}</>
    );
}
export default ParticipantList;
