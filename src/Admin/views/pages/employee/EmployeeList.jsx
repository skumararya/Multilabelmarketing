import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchemployee } from "../../../../redux/slice/adminSlice/userSlice"; 

const EmployeeList = () => {

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchemployee(`ManageEmployee`)); 
      }, [dispatch]);
      const { employeelist, loading } = useSelector((state) => state.userSlice); 

  return (
    <div className="emp-form-wraper">
    <div className="container">
      <div className="table-responsive">
        <div className="primary-heading">Employee List</div>
     <table className="table table-bordered">
     <thead>
       <tr>
       <th>Sr No.</th>
       <th>Name</th>
       <th>Email</th>
       <th>Mobile No.</th>
       <th>Gender</th>
       <th>Address</th>
       <th>Action </th>
       </tr>
     </thead>
     <tbody>
       {employeelist && employeelist.employeeList && employeelist.employeeList.map((item, index) => (
       <tr key={index}>
       <td>{index+ 1}</td>
       <td>{item.fullName}</td> 
       <td>{item.email}</td>
       <td>{item.mobile}</td>
       <td>{item.gender}</td>
       <td>{item.address}</td>
       <td><button className="btn btn-sm btn-danger mr-2">Delete</button>
        <button className="btn btn-sm btn-warning">Edit</button></td>
       </tr>
       ))}
     </tbody>
     </table>
    </div>
    </div>
    </div>
  )
}

export default EmployeeList
