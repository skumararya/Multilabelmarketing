import React from 'react'
import { CForm,CFormLabel,CFormInput,CFormText,CFormCheck,CButton, CContainer } from '@coreui/react'
import { Link } from 'react-router-dom'
const Login = () => {
  return (
    <>
    <div className='login-sec py-5'>
    <CContainer>
    <div className="row justify-content-center">
    <div className="col-6">
     <CForm>
  <div className="mb-3 pt-4">
    <CFormLabel htmlFor="exampleInputEmail1">Email address</CFormLabel>
    <CFormInput type="email" id="exampleInputEmail1" aria-describedby="emailHelp" />
    <CFormText id="emailHelp">We'll never share your email with anyone else.</CFormText>
  </div>
  <div className="mb-3">
    <CFormLabel htmlFor="exampleInputPassword1">Email Password</CFormLabel>
    <CFormInput type="password" id="exampleInputPassword1" />
  </div>
  <CFormCheck
    className="mb-3"
    label="Check me out"
    onChange={(e) => {
      console.log(e.target)
    }}
  />
  {/* <CButton type="submit" color="primary" to="/dashboard">
    Submit
  </CButton> */}
  <div className='my-5 text-center'>
  <Link className='blue-btn' to={"/admin/dashboard"}>Login</Link>
  </div>
</CForm>
</div>
</div>
</CContainer>
</div>
    </>
  )
}

export default Login
