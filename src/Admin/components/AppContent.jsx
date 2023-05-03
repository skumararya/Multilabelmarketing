import React, { useEffect } from "react";
import { fetchemployee } from "../../redux/slice/adminSlice/userSlice";
import { useDispatch, useSelector } from "react-redux";
const AppContent = () => {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchemployee(`ManageEmployee`)); 
  }, [dispatch]);
  const { employeelist, loading } = useSelector((state) => state.userSlice);
  return (
    <div className="container">
   <div className="table-responsive">
    <table className="table table-bordered">
    <thead>
      <tr>
      <th>Sr No.</th>
      <th>Name</th>
      <th>Email</th>
      <th>Mobile No.</th>
      <th>Gender</th>
      <th>Address</th>
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
      </tr>
      ))}
    </tbody>
    </table>
   </div>
   </div>
  )
}

export default AppContent
