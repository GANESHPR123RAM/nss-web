import React from 'react'
import "../Dashboardcss/admindashboard.css"
import { Link } from 'react-router-dom'

const AdminDashboard = () => {
  return (
   
    <div class="Admincontainer" >
       <h1>AdminDashboard</h1>
       <h3>Links</h3>
       <div className="adminbuttons">
      <Link to="admin/registerCA" >   <button class="adminbtns" > RegisterCA </button></Link>
      <Link to="admin/getAllUsers" >  <button class="adminbtns" > GetAllUsers </button></Link>
       <Link to="/admin/uploadTasks"> <button class="adminbtns" > UploadTasks </button></Link> 
       <Link to="/admin/getAllEventRegistrations">
       <button class="adminbtns" > Eventsregistration </button>
       </Link>
       <Link to="/admin/getAllUsers?role=ca">
       <button class="adminbtns" > Registered CAs </button>
       </Link>

         </div>
        </div>
        )
}

export default AdminDashboard