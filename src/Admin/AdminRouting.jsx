import React from 'react';
import { Route, Routes } from "react-router-dom";
import Employee from './views/pages/employee/Employee';
import EmployeeList from './views/pages/employee/EmployeeList';
import EditEmployee from './views/pages/employee/EditEmployee';
const AdminRouting = () => {
  return (
    <Routes>
      {/* Main Menu */}
      <Route path="/" element={<Employee />}></Route>
      <Route path="employee" element={<Employee />}></Route>
      <Route path="employies" element={<EmployeeList />}></Route>
      <Route path='editemployee' element={<EditEmployee />}></Route>
      </Routes>
  )
}

export default AdminRouting
