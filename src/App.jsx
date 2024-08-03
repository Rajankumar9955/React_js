
// import { useState } from "react";
// import axios from "axios";
// const App=()=>{

import { Button } from "bootstrap";
import { useState } from "react";


// const [input,setInput]=useState({})
// const handleInput=(e)=>{
//   let name=e.target.name;
//   let value=e.target.value;
//   setInput((values)=>({...values,[name]:value}))
//   console.log(input)
// }
// const handleSubmit=()=>
// {
//   let api="http://localhost:3000/student";
//   axios.post(api,input).then((res)=>{
//     console.log(res);
//     alert("Data save");
//   })
// }
//   return (
//     <>
// Enter name:<input type="text" name="name" value={input.name} onChange={handleInput}/><br />
// Enter city:<input type="text" name="city" value={input.city} onChange={handleInput}/><br />
// Enter age:<input type="text" name="age" value={input.age} onChange={handleInput}/><br />
// <button onClick={handleSubmit}>data data!</button>
//     </>
//   )
// }
// export default App;

// ===============================================
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Insert from "./components/Insert";
import Update from "./components/Update";
import Search from "./components/Search";
import Contact from "./components/Contact";
import Layout from "./components/Layout";
import Display from "./components/Display";
import EditData from "./components/EditData";





const App=()=>{
  
  

  return(
    <>
           <BrowserRouter>
                       <Routes>
                      <Route path="/" element={<Layout/>}>
                      <Route  index element={<Home/>}/>
                      <Route path="home" element={<Home/>}/>
                      <Route path="insert" element={<Insert/>}/>
                      <Route path="display" element={<Display/>}/>
                      <Route path="update" element={<Update/>}/>
                      <Route path="search" element={<Search/>}/>
                      <Route path="contact" element={<Contact/>}/>
                      <Route path="myedit/:id" element={<EditData/>}/>
                      

                        </Route>
                    </Routes>
           </BrowserRouter>


  


  



















          
    </>
  )
}

export default App;