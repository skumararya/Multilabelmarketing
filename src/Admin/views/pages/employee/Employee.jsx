import React, { useEffect } from "react";
import { addemployee } from "../../../../redux/slice/adminSlice/userSlice";
import { useDispatch, useSelector } from "react-redux";
import { Formik } from "formik"; 
import * as Yup from "yup";

const Employee = () => {

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
    console.log(values);
    dispatch(addemployee({url:"ManageEmployee/AddEmployee", empmodal:values}))
   // alert("Registered Successfully");
}


    const dispatch = useDispatch();



  return (
    <div className="container">
        <div className="emp-form-wraper">
            <Formik 
             initialValues={initialValues}
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
                    <input type="text" className="form-control"
                    id="gender"
                    name="gender"
                    value={values.gender}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    />
                </div>
            </div>
            <div className="col-4 col-md-4">
                <div className="form-group">
                    <label>State</label>
                    <input type="text" className="form-control"
                    id="stateId"
                    name="stateId"
                    value={values.stateId}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    />
                </div>
            </div>
            <div className="col-4 col-md-4">
                <div className="form-group">
                    <label>City</label>
                    <input type="text" className="form-control"
                    id="cityId"
                    name="cityId"
                    value={values.cityId}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    />
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

export default Employee
