import Employee from "./Employee";

let EmployeeList = (props) => {

    return <div>
        <h2>Employee List</h2>
        <ul>
            {props.data.map((emp,i) => <Employee employee={emp}/> )}
        </ul>
    </div>
}

export default EmployeeList