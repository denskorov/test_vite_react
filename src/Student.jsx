import PropTypes from "prop-types";

function Student(props) {
    return (
        <div>
            <p>Name: {props.name}</p>
            <p>Age: {props.age}</p>
            <p>is student: {props.isStudent ? 'Yes' : 'No'}</p>
        </div>
    );
}

Student.propTypes = {
    name: PropTypes.string,
    age: PropTypes.number,
    isStudent: PropTypes.bool,
}

Student.defaultProps = {
    isStudent: true,
    name: "Ivan",
    age: 30,
}

export default Student
