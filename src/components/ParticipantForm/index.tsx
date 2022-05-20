import {FC, useState} from 'react';
import useForm from '../../hooks/form';

const ParticipantForm: FC<any> = ({addParticipantCallback}) => {
    const [isFormHidden, toggleForm] = useState<boolean>(true);
    const {onChange, onSubmit} = useForm(
        addParticipantCallback
    );

    function showForm(): void {
        toggleForm(!isFormHidden);
    }
    return (
        <>
            <div className="row justify-content-center">
                <div className="col-md-6" hidden={isFormHidden}>
                    <form onSubmit={onSubmit}>
                        <div className="form-group pb-1">
                            <label className="pb-1" htmlFor="participantNameInput">Participant Name</label>
                            <input
                                name="name"
                                type="text"
                                className="form-control"
                                id="participantNameInput"
                                placeholder="Name..."
                                maxLength={50}
                                required
                                onChange={onChange}
                            />
                        </div>
                        <div className="form-group pb-1">
                            <label className="pb-1" htmlFor="participantAgeInput">Participant Age</label>
                            <input
                                name="age"
                                type="number"
                                className="form-control"
                                id="participantAgeInput"
                                placeholder="Age... (digits only)"
                                max={100}
                                required
                                onChange={onChange}
                            />
                        </div>
                        <div className="row justify-content-center">
                            <button
                                type="submit"
                                className="btn btn-primary w-50 mt-2 p-3 rounded-pill border-0 fw-bold">
                                Submit
                            </button>
                        </div>
                    </form>
                </div>
            </div>
            <div className="row justify-content-center">
                <button
                    onClick={showForm}
                    type="submit"
                    className="btn btn-primary w-50 p-3 rounded-pill border-0 fw-bold mt-5">
                    Add Participant
                </button>
            </div>
        </>
    );
}
export default ParticipantForm;
