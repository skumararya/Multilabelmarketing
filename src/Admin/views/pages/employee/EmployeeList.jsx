import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchemployee, deletemployee } from "../../../../redux/slice/adminSlice/userSlice"; 
import { useNavigate } from "react-router-dom";
//import { fetchstates } from "../../../../redux/slice/OtherSlice";

const EmployeeList = () => {
//const {getstates , setstates} = useState("dnfksjdghkj");
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchemployee(`ManageEmployee`)); 
      }, [dispatch]);

      //setstates = fetchstates(`Managemaster/GetAllState`);
     //console.log(getstates);
      const { employeelist, loading } = useSelector((state) => state.userSlice); 
const Deletemp =(id)=>{
 if(window.confirm('Are you sure to delete?')){
   dispatch(deletemployee(`ManageEmployee/${id}`))
} 
}
const navigate = useNavigate();


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
       {/* <th>Gender</th> */}
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
       {/* <td>{item.gender}</td> */}
       <td>{item.address}</td>
       <td><button className="btn btn-sm btn-danger mr-2" onClick={(e) => Deletemp(item.id)}>Delete</button>
        <button className="btn btn-sm btn-warning" onClick={()=>navigate(`/admin/editemployee`,{state:{item}})} >Edit</button></td>
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
