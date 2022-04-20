import logo from './logo.svg';
import './App.css';
import { Home } from './components/Home';
import { ContactUs } from './components/ContactUs';
import { Route, Routes } from 'react-router-dom';
import { Movies } from './components/Movies';
import {MainMenu} from './components/MainMenu';
import { MovieDetails } from './components/MovieDetails';
import { AddEmployee } from './components/AddEmployee';
import { TicketList } from './components/TicketList';
import { useState } from 'react'
import { AddTicket } from './components/AddTicket';
import { SimpleForm } from './components/SimpleForm';
import { Users } from './components/Users';
import { Products } from './components/Products';
import { Productlist } from './components/Productlist';
import { UpdateProduct } from './components/UpdateProduct';
import { AddMovie } from './components/MoviesApi/AddMovie';
import { ListMovies } from './components/MoviesApi/ListMovies';
import { UpdateMovie } from './components/MoviesApi/UpdateMovie';
import { FileUpload } from './FileUpload';
import { Table } from '@material-ui/core';
import { TableDemo } from './mui/TableDemo';

function App() {
  // var name = "Vidit"
  // var a = 100
  // var b = 200
  // var c = a + b
  // var isMarried = false
  // var style = {
  //   color : "red"
  // }
  var students = [{
    name: "abc",
    age : 23,
    gender: "male"
  },{
    name: "xyz",
    age : 25,
    gender: "female"
  },{
    name: "vraj",
    age : 40,
    gender: "male"
  },{
    name: "Ram",
    age : 28,
    gender: "male"
  }]
  var name = "Royal"
  var x = 100
  // function run(){
  //   alert("this is alert box")
  // }

  const [tickets, setTickets] = useState([
    {
      name : "Login Bug",
      desc : "Resolve Login bug for user"
    },
    { 
      name : "Logout Bug",
      desc : "Resolve Logout bug for user"
    }
  ])    

  const deleteTicket = (ticket)=>{
    setTickets(tickets.filter(t=>t.name !== ticket.name))
  }

  const addTicket = (ticket)=>{
    setTickets([...tickets,ticket])
  }

  return (
    <div className = "App">
      {/* <AddMovie/> <br></br>
      <ListMovies/> */}
      {/* <FileUpload/> */}
      <TableDemo/>
      {/* <Products/> */}
      {/* <SimpleForm /> */}
      {/* <Products/> */}
      {/* <Productlist/> */}
      {/* <Users/> */}
      {/* <AddTicket addTicket={addTicket}/>
      <TicketList ticket={tickets}  deleteTicket = {deleteTicket}/> */}
      {/* <MainMenu/> */}
      {/* {<AddEmployee/>} */}
      <Routes>
          {/* <Route path='/movies' element={<Movies/>}></Route>
          <Route path='/movies/moviedetails/:id' element={<MovieDetails/>}></Route> */}
          {/* <Route path='/updateproduct/:id' element={<UpdateProduct/>} ></Route> */}
          {/* <Route path='/updatemovie/:id' element={<UpdateMovie/>}></Route> */}
      </Routes>
      {/* <h1>APP JS</h1>
      <Home  students = {students}/>
      <ContactUs name = {name} x = {x}/> */}
        {/* <h1>Hello</h1>
        <h2>{name}</h2>
        <h3>no is = {a + b}</h3>
        <button></button> */}
    </div>
  );
}

export default App;
