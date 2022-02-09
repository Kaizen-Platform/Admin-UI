import React from 'react'
import { Nav } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import "../App.css";

export default function VerticalNav() {
  return (
    <div className = "Sidebar">
        <Nav defaultActiveKey="/home" className="flex-column" bg = "dark">
        <Nav.Link href="/home">Home</Nav.Link>
        <Nav.Link eventKey="link-1">Employees</Nav.Link>
        <Nav.Link eventKey="link-2">Ideas</Nav.Link>
        
        </Nav>
    </div>

  )
}
