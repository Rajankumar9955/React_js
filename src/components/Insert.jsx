import Form from 'react-bootstrap/Form';
import { useState } from 'react';
import axios from 'axios';
const Insert=()=>{
const [input,setInput]=useState({})
const handleInput=(e)=>{
   let name=e.target.name;
   let value=e.target.value;
   setInput((values)=>({...values,[name]:value}));
   console(input);
}
const handleSubmit=(e)=>
{
    e.preventDefault();
    let url="http://localhost:3000/student";
    axios.post(url,input).then((res)=>{
        console.log(res);
        alert("Saved Data");
    })
}
    return(
        <>
        <h1>Insert Data!</h1>
        <div style={{margin:"auto",width:"400px",height:"300px",marginTop:"45px",backgroundColor:"teal"}}>

        <Form.Control  type="text" name="rollno" value={input.rollno}  placeholder="Enter the Rollno" onChange={handleInput}/>
      <br />
      <Form.Control type="text"  name="name" value={input.name}placeholder="Enter the Name"onChange={handleInput} />
      <br />
      <Form.Control  type="text" name="city" value={input.city} placeholder="Enter the city" onChange={handleInput}/>
      <br />
      <Form.Control  type="text" name="fees" value={input.fees} placeholder="Enter the Fees" onChange={handleInput}/>
      <br />
      
      
      <button onClick={handleSubmit}>Save Data!!</button>
      </div>
        
        </>
    )
}
export default Insert;