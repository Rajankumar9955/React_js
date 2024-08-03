


import { useState } from "react";
import axios from "axios";
import Table from 'react-bootstrap/Table';
const Search=()=>{
    const [rollno,setRollno]=useState("");
    const [mydata,setData]=useState([])
    const mySearch=()=>{
        let url=`http://localhost:3000/student/?rollno=${rollno}`
        axios.get(url).then((res)=>{
            setData(res.data);
        });
    }
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
        <h1>This is search section</h1>
        Enter Rollno:<input type="text" value={rollno} onChange={(e)=>{setRollno(e.target.value)}}/>
        <button onClick={mySearch}>Search</button>
        <hr />
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
export default Search;