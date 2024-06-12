import React, { useState } from 'react'
import NavBar from './NavBar'
import axios from 'axios'

const AddEmployee = () => {
    const [data,setData]=useState(
        {
       "name":"",
       "salary":"",
       "designation":""
    }
)
const inputHandler=(event)=>{
    setData({...data,[event.target.name]:event.target.value})
}
const readValue=()=>{
    console.log(data)
    axios.post("http://localhost:8080/add",data).then((response)=>{
        console.log(response.data)
        if (response.data.status =="success") 
            {alert("successfully added")
            
        } else { alert("error")
            
        }
    }).catch()
}

  return (
    <div>
        <NavBar/>
        <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <div className="row g-3">
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                        <label htmlFor="form-label">Employee Name</label>
                        <input type="text" className="form-control" name='name'value={data.name} onChange={inputHandler}/>


                        </div>
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <label htmlFor="form-label">salary</label>
                        <input type="text" className="form-control" name='salary'value={data.salary} onChange={inputHandler} />


                        </div>
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <label htmlFor="form-label">designation</label>
                        <select name="designation" id="" className="form-control" value={data.designation} onChange={inputHandler}>
                            <option value="manager">manager</option>
                            <option value="accountant">accountant</option>
                            <option value="sales">sales</option>
                        </select>

                        </div>
                        <center>
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <button class="btn btn-success" onClick={readValue}>SUBMIT</button>
                        </div>
                        </center>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AddEmployee