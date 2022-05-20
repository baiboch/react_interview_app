import {FC} from 'react';
import {ParticipantModel} from '../Participant/model';
import Participant from '../Participant';

const ParticipantList: FC<{ data: ParticipantModel[] }> = ({data}) => {
    return (
        <div className="row justify-content-center mt-2">
            <div className="col-md-6 text-center">
                {data.map((item: ParticipantModel, index) => <Participant key={index} participant={item}/>)}
            </div>
        </div>
    );
}
export default ParticipantList;
