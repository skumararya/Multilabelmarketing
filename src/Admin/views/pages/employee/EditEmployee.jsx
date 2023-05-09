import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Formik } from "formik"; 
import  {fetchstates , fetchcities}  from "../../../../redux/slice/OtherSlice";
import { useDispatch, useSelector } from "react-redux";
import { addemployee } from "../../../../redux/slice/adminSlice/userSlice";
import * as Yup from "yup";

const EditEmployee = () => {

          const location = useLocation();
          const data = location.state.item;

const navigate = useNavigate();
    const dispatch = useDispatch();
    const initialValues= {
        fullName: "",
        email: "",
        mobile:"",
        gender:"",
        cityId:"",
        stateId:"",
        address:"",
        pinCode:"",
    
    };
    
    const SignupSchema = Yup.object({
    
       
        email : Yup.string().required("Required"),
        fullName : Yup.string().required("Required"),
    
    });
    
    const handleSubmit = (values) => {
 
       if (values.id != '') {
        dispatch(addemployee({url:"ManageEmployee/AddEmployee", empmodal:values}))
        alert("Registered Edit Successfully");
        navigate("/admin/employies");
    }
    }
    
    const { statelist , citilist} = useSelector(
        (state) => state.OtherSlice
      );
      useEffect(()=>{
        dispatch(fetchstates("ManageMaster/GetAllState"));
        //dispatch(fetchcities("Managemaster/1"))
    },[dispatch]);

  return (
    <div className="container">
        <div className="emp-form-wraper">
            <Formik 
             initialValues={data}
           validationSchema={SignupSchema}
        onSubmit={handleSubmit}
        >
           {({
          handleSubmit,
          handleBlur,
          handleChange,
          errors,
          values,
          touched,
        }) => (
          <form onSubmit={handleSubmit}>
        <div className="row">
            <div className="col-4 col-md-4">
                <div className="form-group">
                    <label>Name</label>
                    <input type="text" className="form-control"
                     id="fullName"
                     name="fullName"
                     value={values.fullName}
                     onChange={handleChange}
                     onBlur={handleBlur}
                    />
                       {touched.fullName && errors.fullName ? (
                    <div className="error">{errors.fullName}</div>
                  ) : null}
                </div>
            </div>
           <div className="col-4 col-md-4">
                <div className="form-group">
                    <label>Email</label>
                    <input type="text" className="form-control"
                     id="email"
                     name="email"
                     value={values.email}
                     onChange={handleChange}
                     onBlur={handleBlur}
                    />
                    {touched.email && errors.email ? (
                    <div className="error">{errors.email}</div>
                  ) : null}
                </div>
            </div>
             
            <div className="col-4 col-md-4">
                <div className="form-group">
                    <label>Mobile No.</label>
                    <input type="text" className="form-control" 
                     id="mobile"
                     name="mobile"
                     value={values.mobile}
                     onChange={handleChange}
                     onBlur={handleBlur}
                    />
                </div>
            </div>
            <div className="col-4 col-md-4">
                <div className="form-group">
                    <label>Gender</label>
                    <select  className="form-control"
                    id="gender"
                    name="gender"
                    value={values.gender}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    >
                    <option value={1}>Male</option>
                    <option value={2}>Female</option>
                   
                    </select>
                </div>
            </div>
            <div className="col-4 col-md-4">
                <div className="form-group">
                    <label>State</label>
                    <select  className="form-control"
                    id="stateId"
                    name="stateId"
                    value={values.stateId}
                    //onChange={handleChange}
                    onBlur={handleBlur}
                    onChange={(e) => {
                        handleChange(e);
                        // dispatch(
                        //   fetchstates(
                        //     `Managemaster/GetAllState`
                        //   )
                        // );
                        dispatch(
                            fetchcities(
                                `Managemaster/${e.target.value}`
                            )
                          );
                      }}
                    > 
                     <option>Select State</option>
                     {
                       statelist && statelist.stateList && statelist.stateList.map((item,index)=>(
                            <option key={index} value={item.id}>{item.value}</option>
                        ))
                     }
                     </select>
                </div>
            </div>
            <div className="col-4 col-md-4">
                <div className="form-group">
                    <label>City</label>
                    <select type="text" className="form-control"
                    id="cityId"
                    name="cityId"
                    value={values.cityId}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    >
                        <option>Select City</option>
                        {
                        citilist  &&  citilist.districtList && citilist.districtList.map((item,index)=>(
                        <option key={index} value={item.id}>{item.value}</option>
                        ))
                              }
                    </select>
                </div>
            </div>
            <div className="col-4 col-md-4">
                <div className="form-group">
                    <label>Pin Code</label>
                    <input type="text" className="form-control"
                    id="pinCode"
                    name="pinCode"
                    value={values.pinCode}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    />
                </div>
            </div>
            <div className="col-8 col-md-8">
                <div className="form-group">
                    <label>Address</label>
                    <textarea  className="form-control" 
                    id="address"
                    name="address"
                    value={values.address}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    />
                </div>
            </div> 



            <div className="col-12 col-md-12 text-center my-5">
                <div className="form-group">
                  <button type="button" className="btn btn-secondary mr-2" onClick={()=>navigate(`/admin/employies`)} >Cancel</button>
                    <button type="submit" className="btn btn-primary" value={"Submit"} >Submit</button>
                </div>
            </div>
        </div>
        </form>
        )}
        </Formik>
        </div>
        
    </div>
  )
}

export default EditEmployee
