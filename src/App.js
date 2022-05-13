import logo from './logo.svg';
import './App.css';
import { Home } from './components/Home';
import { ContactUs } from './components/ContactUs';
import { Route, Routes } from 'react-router-dom';
import { Movies } from './components/Movies';
import { MainMenu } from './components/MainMenu';
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
import { Table } from '@material-ui/core';
import { TableDemo } from './mui/TableDemo';
import { FileUpload } from './components/FileUpload';
import { LoginRoute } from './components/protectedrout/LoginRoute';
import { ListUsers } from './components/protectedrout/ListUsers';
import { My404Component } from './components/My404Component';
import { QueryDemo } from './query/QueryDemo';
import { QueryDemo2 } from './query/QueryDemo2';
import { QueryDemo3 } from './query/QueryDemo3';

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
    age: 23,
    gender: "male"
  }, {
    name: "xyz",
    age: 25,
    gender: "female"
  }, {
    name: "vraj",
    age: 40,
    gender: "male"
  }, {
    name: "Ram",
    age: 28,
    gender: "male"
  }]
  var name = "Royal"
  var x = 100
  // function run(){
  //   alert("this is alert box")
  // }

  const [tickets, setTickets] = useState([
    {
      name: "Login Bug",
      desc: "Resolve Login bug for user"
    },
    {
      name: "Logout Bug",
      desc: "Resolve Logout bug for user"
    }
  ])

  const deleteTicket = (ticket) => {
    setTickets(tickets.filter(t => t.name !== ticket.name))
  }

  const addTicket = (ticket) => {
    setTickets([...tickets, ticket])
  }

  return (
    <div className="App">
      {/* <AddMovie/> <br></br>
      <ListMovies/> */}
      {/* <FileUpload/> */}
      {/* <TableDemo/> */}
      {/* <Products/> */}
      {/* <SimpleForm /> */}
      {/* <LoginRoute /> */}
      {/* <Products/> */}
      {/* <Productlist/> */}
      {/* <Users/> */}
      {/* <AddTicket addTicket={addTicket}/>
      <TicketList ticket={tickets}  deleteTicket = {deleteTicket}/> */}
      {/* <MainMenu/> */}
      {/* {<AddEmployee/>} */}
      {/* <QueryDemo2/> */}
      {/* <QueryDemo/> */}
      <QueryDemo3/>
      {/* <Routes> */}
        {/* <Route path='/movies' element={<Movies/>}></Route>
          <Route path='/movies/moviedetails/:id' element={<MovieDetails/>}></Route> */}
        {/* <Route path='/updateproduct/:id' element={<UpdateProduct/>} ></Route> */}
        {/* <Route path='/updatemovie/:id' element={<UpdateMovie/>}></Route> */}
        {/* {
          sessionStorage.getItem('email') !== null ?
            <Route path='/listusers' element={<ListUsers />}></Route>
            : "/"
        }
        <Route path='*' element={<My404Component/>} />
        <Route path='/' element={<AddEmployee/>} />
      </Routes> */}
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
