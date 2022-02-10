import './App.css';
import { EmployeesTable } from './components/Employees/EmployeesTable';
import { Footer } from './components/Footer/Footer';

import {useState} from 'react';


function App() {

  // const onEdit = (employee_id, newRole) =>{
  //   let newEditItem = employees.find((elem) =>{
  //     return elem.employee_id === employee_id;
  //   })
  //   console.log(newEditItem, newRole);
  //   //for deleting
  //   // setEmployees(employees.filter((e)=>{
  //   //   return e!==employee;
  //   // }));
  // }

  const [employees, setEmployees] = useState([
    {
      employee_id: "ZOHO-1",
      employee_name: "Janea",
      employee_email: "jane@abc",
      employee_role: "Platform user"
    },
    {
      employee_id: "ZOHO-2",
      employee_name: "Janeb",
      employee_email: "jane@abc",
      employee_role: "Platform Admin"
    },
    {
      employee_id: "ZOHO-3",
      employee_name: "Janec",
      employee_email: "jane@abc",
      employee_role: "Kaizen Committe"
    }
  ]);
  return (
    <div className='App'>
      <EmployeesTable employees = {employees}/>
      <Footer/>
    </div>
    
  );
}

export default App;
