import React, {Component} from "react"
import "./style.css"

class Employee extends Component{
    state={
        employees:
        [{id:1,name:"Frodo Baggins",department:"Management",role:"CEO"},
        {id:2,name:"Samwise Gamgee",department:"Management",role:"CTO"},
        {id:3,name:"Gandalf the Gray",department:"Recruitment",role:"Lead-recruiter"},
        {id:4,name:"Aragorn",department:"Security",role:"Security officer"},
        {id:5,name:"Legolas",department:"Management",role:"Office manager"}]
    }


    render(){
        return(
        ( <div className="employee-list">
        { this.state.employees.map((user) => (
          <div>
            <div>Employee name: {user.name}</div>
            
             <div>Current department: {user.department}</div>
          <div>Employee role: {user.role}</div><hr></hr>
          </div>
        )) }
      </div>
        )
        )
}}

export default Employee