

import { useState,useEffect } from "react";
import axios from "axios";
import Table from 'react-bootstrap/Table';
import dltimg from "../image/dlt.jpg"
import edt from "../image/edt.png"
import { useNavigate } from "react-router-dom";
const Update=()=>{
    const [myData,setMydata]=useState([]);
    const loadData=()=>{
        let url="http://localhost:3000/student";
        axios.get(url).then((res)=>{
            setMydata(res.data);
        })
    }
    useEffect(()=>{
        loadData();
    },[])
    const mydel=(myid)=>{
        let url=`http://localhost:3000/student/${myid}`;
        axios.delete(url).then((res)=>{
            alert("record delete");
            loadData();
        })
    }
  const myNav=useNavigate(); //for edit
const myEdit=(myid)=>{
    myNav( `/myedit/${myid}`)
}
    let ans=myData.map((key)=>{

        return(
        <>
        <tr>
            <td>{key.rollno}</td>
            <td>{key.name}</td>
            <td>{key.city}</td>
            <td>{key.fees}</td>
            <td>
                
                <a href="#">
                    <img src={dltimg} alt="" width="30" height="30" onClick={()=>{mydel(key.id)}}/>
                </a>
                 <a href="">-===-</a>
                <a href="#">
                <img src={edt} alt="" width="30" height="30" onClick={()=>{myEdit(key.id)}}/>
                </a>
            </td>
        </tr>
        </>
        )
    })
    return(
        <>
        <h1>This is Update section</h1>
        <Table striped bordered hover>
      <thead>
        <tr>
          <th>ROLLNO:</th>
          <th>Name</th>
          <th>CITY</th>
          <th>FEES</th>
          <th>Delete | Update</th>
        </tr>
      </thead>
      <tbody>
               {ans} 
      </tbody>
    </Table>
        
        </>
    )
}
export default Update;