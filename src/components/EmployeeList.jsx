import Employee from "./Employee";

let EmployeeList = ({data}) => {

    return <div>
        <h2>Employee List</h2>
        <ul>
            {data.map((emp,i) => <Employee key={i} employee={emp}/> )}
        </ul>
    </div>
}

export default EmployeeList