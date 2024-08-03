
import { Link, Outlet } from "react-router-dom";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';

const Layout=()=>{
  return(
    <>
   <Navbar bg="warning" data-bs-theme="warning">
        <Container>
          <Navbar.Brand as={Link} to="home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="home">Home</Nav.Link>
            <Nav.Link as={Link} to="insert">Insert</Nav.Link>
            <Nav.Link as={Link} to="display">Display</Nav.Link>
            <Nav.Link as={Link} to="search">Search</Nav.Link>
            <Nav.Link as={Link} to="update">Update</Nav.Link>
            <Nav.Link as={Link} to="contact">Contact</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <div style={{ height:"480px",border:"2px solid black"}}>
    
        <Outlet/>

      </div>
    <div>
        <h1 style={{marginLeft:"300px"}}>
          This is all sign are reserver in 2024
          </h1>
    </div>
    </>
  )
}
export default Layout;