import React, { useEffect, useState } from 'react'
import NavBar from './NavBar'
import axios from 'axios'

const ViewAll = () => {
    const [data,changeData]=useState([] )

    const fetchData=()=>{
        axios.get("http://localhost:8080/view").then((response)=>{
            console.log(response.data)
            changeData(response.data)
        }).catch()
    }
    useEffect(()=>{fetchData()},[])
    return (
        <div>
            <NavBar/>
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <table class="table">
                            <thead>
                                <tr>
                            
                                    <th scope="col">name</th>
                                    <th scope="col">salary</th>
                                    <th scope="col">designation</th>
                                </tr>
                            </thead>
                            <tbody>
                              {data.map(
                                (value,index)=>{
                                    return   <tr>
                                    
                                    <td>{value.name}</td>
                                    <td>{value.salary}</td>
                                    <td>{value.designation}</td>
                                </tr>
                                }

                              )

                              }

                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ViewAll