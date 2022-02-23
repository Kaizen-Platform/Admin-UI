import './App.css';
import {EmployeesTable} from './components/Employees/EmployeesTable';
import { Footer } from './components/Footer/Footer';
import IdeasList from './components/Ideas/IdeasList';
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import {createTheme, ThemeProvider} from '@material-ui/core'
import { purple } from '@mui/material/colors';
import Layout from './components/Layout';
import {useDispatch} from 'react-redux';
import { getPosts } from './actions/ideas';


const theme = createTheme({
  palette:{
    primary:{
      main:'#fefefe'
    },
    secondary:purple   
  },
  typography:{
    fontFamily: 'QuickSand',
    fontWeightLight: 400,
    fontWeightRegular: 500,
    fontWeightMedium: 600,
    fontWeightBold: 700,
  }
})

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
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  const [employees, setEmployees] = useState([
    {
      employee_id: "ZOHO1",
      employee_name: "Varun",
      employee_email: "jane@abc",
      employee_role: "Platform user"
    },
    {
      employee_id: "ZOHO3",
      employee_name: "Janec",
      employee_email: "jane@abc",
      employee_role: "Kaizen Committe"
    },
    {
      employee_id: "ZOHO2",
      employee_name: "Janeb",
      employee_email: "jane@abc",
      employee_role: "Platform Admin"
    },
    {
      employee_id: "ZOHO4",
      employee_name: "Janed",
      employee_email: "jane@abc",
      employee_role: "Platform Admin"
    },
    {
      employee_id: "ZOHO5",
      employee_name: "Janee",
      employee_email: "jane@abc",
      employee_role: "Kaizen Committe"
    },
    {
      employee_id: "ZOHO6",
      employee_name: "Janef",
      employee_email: "jane@abc",
      employee_role: "Kaizen Committe"
    }

  ]);
  return (
    // <div className='App'>
      
    //   {/* <EmployeesTable employees = {employees}/> */}
    //   <IdeaItem/>
    //   <Footer/>
    // </div>
    <ThemeProvider theme = {theme}>
      <Router>
        <Layout>
          <Routes>
            <Route exact path="/employeeslist" element = {<EmployeesTable employees = {employees}/>}></Route>
            <Route exact path="/ideaslist" element = {<IdeasList/>}></Route>
            
          </Routes>
        </Layout>
      </Router>
    </ThemeProvider>
    
  );
}

export default App;
