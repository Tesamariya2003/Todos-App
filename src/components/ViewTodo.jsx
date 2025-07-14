import React, { useEffect, useState } from 'react'
import Nav from './Nav'
import axios from 'axios'

const ViewTodo = () => {
    const [todoData, changeTodoData] = useState(
        [
            
        ]
    )
       const fetchData = () => {
        axios.get("https://jsonplaceholder.typicode.com/todos").then(
            (response) => {
                changeTodoData(response.data)

            }
        ).catch()
    }
    useEffect(()=>{fetchData()},[])
    return (
        <div>
            <Nav />
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="row g-3">
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <table className="table table-bordered table-striped">
                                <thead className="table-dark">
                                    <tr>
                                        <th scope="col">UserId</th>
                                        <th scope="col">Id</th>
                                        <th scope="col">Title</th>
                                        <th scope="col">Completed</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {todoData.map((value, index) => (
                                        <tr>
                                            <td>{value.userId}</td>
                                            <td>{value.id}</td>
                                            <td>{value.title}</td>
                                            <td>{value.completed ? "True" : "False"}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ViewTodo