import React, { useState } from "react";
import { Link} from "react-router-dom"

const Signup = () => {

  const [credentials,setCredentials]=useState({name:"",email:"",password:"",location:""})

  const Handlesubmit =async (e) => {
    e.preventDefault()
    const response =await fetch("http://localhost:5000/api/createuser", {
      method: "POST",
      headers: {
        "Content-Type":"application/json"
      },
      body:JSON.stringify({name:credentials.name,email:credentials.email,password:credentials.password,location:credentials.location})
    })
    const data = await response.json()
    console.log(data);
   

    if (!data.success) {
      alert("Enter Valid Credentials")
    } else {
      alert("Signed successfully");
    }
  }

  const OnChange = (e) => {
    setCredentials({...credentials,[e.target.name]:e.target.value})
  }


  return (
    <>
      <div
        className="container"
        style={{ maxWidth: "600px", marginTop: "80px" }}
      >
        <div className="text-center mt-3">
          <h2>Signup Form</h2>
        </div>
        <form onSubmit={Handlesubmit}>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Name
            </label>
            <input
              type="text"
              className="form-control"
              name="name"
              value={credentials.name}
              onChange={OnChange}
            />
          </div>
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
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Address
            </label>
            <input
              type="text"
              className="form-control"
              name="location"
              value={credentials.location}
              onChange={OnChange}
            />
          </div>

          <button type="submit" className=" m-3 btn btn-primary">
            Submit
          </button>
          <Link to="/login" className="m-3 btn btn-danger">
            Already a user
          </Link>
        </form>
      </div>
    </>
  );
};

export default Signup;
