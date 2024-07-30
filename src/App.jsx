import './App.css'
import Student from "./Student.jsx";
import PropTypes from "prop-types";

function App() {
    return (
        <>
            <Student name="Ivan" age={30} isStudent={true}/>
            <Student name="Pavel" age={90} isStudent={false}/>
            <Student name="Ivan2" age={55} isStudent={true}/>
            <Student />
        </>
    );
}

export default App
