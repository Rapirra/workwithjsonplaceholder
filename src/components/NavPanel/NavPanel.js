import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Photos from '../Pages/Photos';
import FavouritePosts from '../Pages/FavouritePosts';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
  } from "react-router-dom";
import Posts from '../Pages/Posts'
import Home from '../Pages/Home'
import Todos from '../Pages/Todos'

export default function NavPanel() {
  return (
   <Router>
     <div>
      <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand as={Link} to={"/"}>Logo</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to={"/"}>Home</Nav.Link>
            <Nav.Link as={Link} to={"/posts"}>Posts</Nav.Link>
            <Nav.Link as={Link} to={"/favposts"}>Favourite Posts</Nav.Link>
            <Nav.Link as={Link} to={"/todos"}>Todos</Nav.Link>
            <Nav.Link as={Link} to={"/photos"}>Photos</Nav.Link>
          </Nav>
        </Container>
        </Navbar>
    </div>

    <div>
       <Routes>
            <Route path='/posts' element={<Posts />}></Route>
            <Route path='/favposts' element={<FavouritePosts />}></Route>
            <Route path='/todos' element={<Todos />}></Route>
            <Route path='/photos' element={<Photos />}></Route>
            <Route path='/' element={<Home />}></Route>
       </Routes>        
    </div>
   </Router>
  )
}

