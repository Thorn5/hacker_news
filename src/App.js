import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {BrowserRouter, Route, Routes, Link} from "react-router-dom";
import Home from './components/Home';
import View from './view';
import NoPage from './components/NoPage';

function App() {
  return (
   <BrowserRouter> 
   <div>
     <>
      <Navbar bg="warning" variant="warning">
        <Container>
          <Navbar.Brand href="#home">Hacker-News</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/news">News</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <br />

     </>
     <div>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/news' element={<View />}/>
        <Route path='*' element={<NoPage />}/>
      </Routes>
     </div>
   </div>
   </BrowserRouter>
  );
}

export default App;
