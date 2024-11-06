const Employee = (props) => {

    return <li style={{border:"2px solid black"}}>
        <h2>Name: {props.employee.name}</h2>
        <h3>Age: {props.employee.age}</h3>
    </li>
}

export default Employee