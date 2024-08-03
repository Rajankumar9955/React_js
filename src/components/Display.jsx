

import Table from 'react-bootstrap/Table';
import axios from "axios";
import { useState,useEffect} from "react";

const Display=()=>
{
    const [mydata,setMydata]=useState([]);  //    []:-empty array data hold krne ke liye use krte hai
    const loadData=()=>
    {
          let url="http://localhost:3000/student";
          axios.get(url).then((res)=>{
            console.log(res.data);
            setMydata(res.data);
          })
    }
    useEffect(()=>{
        loadData();
    },[])
    const ans=mydata.map((key)=>{
        return(
            <>
                 <tr>
                    <td>{key.rollno}</td>
                    <td>{key.name}</td>
                    <td>{key.city}</td>
                    <td>{key.fees}</td>
                 </tr>
            </>
        )
        
    })
    return(
        <>
        <h1>This is Display secton</h1>
        <Table striped bordered hover>
      <thead>
        <tr>
          <th>ROLLNO:</th>
          <th>Name</th>
          <th>CITY</th>
          <th>FEES</th>
        </tr>
      </thead>
      <tbody>
               {ans} 
      </tbody>
    </Table>
        </>
    )
}
export default Display;