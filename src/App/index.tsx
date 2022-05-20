import React, {useState} from 'react';
import Navbar from '../components/NavBar';
import Footer from '../components/Footer';
import ParticipantList from '../components/ParticipantList';

function App() {
    const [participants, setParticipant] = useState([{name: 'Andrew', age: 20}]);
    return (
        <>
            <Navbar/>
            <ParticipantList data={participants}/>
            <Footer/>
        </>
    );
}
export default App;
