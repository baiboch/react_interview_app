import {useState} from 'react';
import {ParticipantModel} from '../components/Participant/model';
import Navbar from '../components/NavBar';
import Footer from '../components/Footer';
import ParticipantList from '../components/ParticipantList';
import ParticipantForm from '../components/ParticipantForm';


function App() {
    const [participants, setParticipant] = useState<ParticipantModel[]>([]);
    async function addNewParticipantCallback(data: ParticipantModel) {
        setParticipant([...participants, data]);
    }
    return (
        <>
            <Navbar/>
            <div className="container">
                <ParticipantList data={participants}/>
                <ParticipantForm addParticipantCallback={addNewParticipantCallback}/>
            </div>
            <Footer/>
        </>
    );
}
export default App;
