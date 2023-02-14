import React from 'react';
import { useFormik } from 'formik';
import * as Yup from "yup";
import './index.css';

function App() {


  const { handleBlur, handleChange, handleReset, handleSubmit, setFieldValue, errors, values, touched } = useFormik({
    initialValues: {
      username: "",
      firstname: "",
      lastname: "",
      email: "",
      password: "",
      confirmPassword: "",
      avatar: ""
    },
    validationSchema: Yup.object({

      username: Yup.string()
        .min(3, "At least 3 characters are required.")
        .max(30, "At least 30 characters are required.")
        .required("username is required."),
      firstname: Yup.string()
        .min(3, "At least 3 characters are required.")
        .max(30, "At least 30 characters are required.")
        .required("firstname is required"),
      lastname: Yup.string()
        .min(3, "At least 3 characters are required.")
        .max(30, "At least 30 Characters are required.")
        .required("lastname is required."),
      email: Yup.string()
        .email("Please provide valid email addrress")
        .required("Email is required."),
      password: Yup.string()
        .min(6, "Password should be minimum 6 character long")
        .required("password is required"),
      confirmPassword: Yup.string()
        .min(6, "Password does not match")
        .required("Please confirm the password"),
      avatar: Yup.string()
        .required("Please upload and image")

    }),
    onSubmit: values => {
      // alert(JSON.stringify(values, null, 2));
      console.log("From Values", values);
      // here will be the code of backend to push all the form data to backend 
    }
  });



  return (
    <div className='max-w-[20rem]'>

      <form action="" onSubmit={handleSubmit} >
        <div className='flex flex-col p-5 '>
          <input
            onChange={handleChange}
            onBlur={handleBlur}
            className='p-3 mb-4 border border-indigo-300'
            placeholder='username'
            type="username"
            name="username"
            value={values.username}
            id="" />
          {touched.username && errors.username ? <span className='text-red-600 '>{errors.username}</span> : <></>}
          <input
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.firstname}
            className='p-3 mb-4 border border-indigo-300'
            placeholder='firstname' type="firstname"
            name="firstname"
            id="" />
          {touched.firstname && errors.firstname ? <span className='text-red-600 '>{errors.firstname}</span> : <></>}
          <input
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.lastname}
            className='p-3 mb-4 border border-indigo-300'
            placeholder='lastname' type="lastname"
            name="lastname"
            id="" />
          {touched.lastname && errors.lastname ? <span className='text-red-600 '>{errors.lastname}</span> : <></>}
          <input
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.email}
            className='p-3 mb-4 border border-indigo-300'
            placeholder='email' type="email"
            name="email"
            id="" />
          {touched.email && errors.email ? <span className='text-red-600 '>{errors.email}</span> : <></>}
          <input
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.password}
            className='p-3 mb-4 border border-indigo-300'
            placeholder='password' type="password"
            name="password"
            id="" />
          {touched.password && errors.password ? <span className='text-red-600 '>{errors.password}</span> : <></>}
          <input
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.confirmPassword}
            className='p-3 mb-4 border border-indigo-300'
            placeholder='confirmPassword' type="password"
            name="confirmPassword"
            id="" />
          {touched.confirmPassword && errors.confirmPassword ? <span className='text-red-600 '>{errors.confirmPassword}</span> : <></>}
          <input
            onChange={(e) => {
              let file = new FileReader();
              file.onload = () => {
                if (file.readyState === 2) {
                  setFieldValue("avatar", file.result);
                  // console.log(file.result)
                  // setPreview(file.result)
                }
              }
              file.readAsDataURL(e.target.files[0])
            }}
            onBlur={handleBlur}
            className='p-3 mb-4 border border-indigo-300'
            type="file"
            name="avatar"
            id="avatar" />
          {touched.avatar && errors.avatar ? <span className='text-red-600 '>{errors.avatar}</span> : <></>}
          <button
            className='w-[9rem] bg-[#00df9a] px-6 py-2 my-6 rounded-md text-black font-bold'>Submit</button>
        </div>
        <img src={values.avatar} alt="" />
      </form>


    </div>
  );
}

export default App;
