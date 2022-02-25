import './App.css';
import {EmployeesTable} from './components/Employees/EmployeesTable';
import { Footer } from './components/Footer/Footer';
import IdeasList from './components/Ideas/IdeasList';
import MyIdeas from './components/Ideas/MyIdeas';
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import {createTheme, ThemeProvider} from '@material-ui/core'
import { purple } from '@mui/material/colors';
import Layout from './components/Layout';
import {useDispatch} from 'react-redux';
import { getPosts } from './actions/ideas';
import EditIdea from './components/Ideas/Edit/EditIdea';
import IdeaDetails from './components/Ideas/IdeaDetails';

const theme = createTheme({
  palette:{
    primary:{
      main:'#FEFEFE'
    },
    secondary:{
      main:'#000000'
    },
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

  const [ideaData, setIdeaData] = useState([])
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

  useEffect(() => {
    fetch( "http://localhost:5000/ideas")
        .then(response => response.json())
        .then(data => setIdeaData(data))
    
  }, [])
  return (
    <ThemeProvider theme = {theme}>
      <Router>
        <Layout>
          <Routes>
            <Route exact path="/employeesList" element = {<EmployeesTable employees = {employees}/>}></Route>
            <Route exact path="/ideasList" element = {<IdeasList ideaData = {ideaData} />}></Route>
            <Route exact path="/myIdeas" element = {<MyIdeas ideaData = {ideaData}/>}></Route>
            <Route exact path="/editIdea/:id" element = {<EditIdea/>} exact></Route>
          </Routes>
        </Layout>
      </Router>
    </ThemeProvider>
    
  );
}

export default App;
