import React, { useState } from 'react'
import { Link,useNavigate } from "react-router-dom";

const Login = () => {

   const [credentials, setCredentials] = useState({
     
     email: "",
     password: "",
     
   });
  const navigate=useNavigate()

   const Handlesubmit = async (e) => {
     e.preventDefault();
     const response = await fetch("http://localhost:5000/api/login", {
       method: "POST",
       headers: {
         "Content-Type": "application/json",
       },
       body: JSON.stringify({
         
         email: credentials.email,
         password: credentials.password,
        
       }),
     });
     const data = await response.json();

     if (!data.success) {
       alert("Enter Valid Credentials");
     } else {
       window.localStorage.setItem("userEmail",credentials.email);
       window.localStorage.setItem("token", "json.token");
       navigate('/')
     }
   };

   const OnChange = (e) => {
     setCredentials({ ...credentials, [e.target.name]: e.target.value });
   };
  return (
    <>
      <div
        className="container"
        style={{ maxWidth: "600px", marginTop: "80px" }}
      >
        <div className="text-center mt-3">
          <h2>Login Form</h2>
        </div>
        <form onSubmit={Handlesubmit}>
          
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              name="email"
              value={credentials.email}
              onChange={OnChange}
            />
            <div id="emailHelp" className="form-text">
              We'll never share your email with anyone else.
            </div>
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              name="password"
              value={credentials.password}
              onChange={OnChange}
            />
          </div>
          

          <button type="submit" className=" m-3 btn btn-primary">
            Submit
          </button>
          <Link to="/createuser" className="m-3 btn btn-danger">
             New user
          </Link>
        </form>
      </div>
    </>
  );
}

export default Login