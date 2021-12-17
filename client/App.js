import logo from './logo.svg';
import './App.css';
import ShowDepartments from './components/Admin/Departments/ShowDepartments';
import AddDepartments from './components/Admin/Departments/AddDepartments';
import UpdateDepartments from './components/Admin/Departments/UpdateDepartments';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from './components/Home';
import NewNavMenu from './components/NewNavMenu';
import ShowBook from './components/Book/ShowBook';
import AddBook from './components/Book/AddBook';
import UpdateBook from './components/Book/UpdateBook';
import ShowBookSection from './components/BookSection/ShowBookSection';
import AddBookSection from './components/BookSection/AddBookSection';
import UpdateBookSection from './components/BookSection/UpdateBookSection';
import ShowBookStructure from './components/BookStructure/ShowBookStructure';
import AddBookStructure from './components/BookStructure/AddBookStructure';
import ShowGiveBook from './components/GiveBook/ShowGiveBook';
import AddGiveBook from './components/GiveBook/AddGiveBook';
import UpdateGiveBook from './components/GiveBook/UpdateGiveBook';
import ShowSpecial from './components/Admin/ShowSpecial';
import ShowStudents from './components/Admin/ShowStudents';
import ShowTeachers from './components/Admin/ShowTeachers';




function App() {
  return (
    <div className="App">
      <Router> 
        <NewNavMenu />
        <Routes>
          <Route exact path='/' element = {<Home/>} />
          <Route exact path='/special' element = {<ShowSpecial/>} />
          <Route exact path='/students' element = {<ShowStudents/>} />
          <Route exact path='/teachers' element = {<ShowTeachers/>} />

          <Route exact path='/book' element = {<ShowBook/>} />
          <Route exact path='/book/add' element = {<AddBook/>} />
          <Route exact path='/book/:id/update' element = {<UpdateBook/>} />

          <Route exact path='/booksection' element = {<ShowBookSection/>} />
          <Route exact path='/booksection/add' element = {<AddBookSection/>} />
          <Route exact path='/booksection/:id/update' element = {<UpdateBookSection/>} />

          <Route exact path='/departments' element = {<ShowDepartments/>} />
          <Route exact path='/departments/add' element = {<AddDepartments/>} />
          <Route exact path='/departments/:id/update' element = {<UpdateDepartments/>} />

          <Route exact path='/bookstructure' element = {<ShowBookStructure/>} />
          <Route exact path='/bookstructure/add' element = {<AddBookStructure/>} />


          <Route exact path='/givebook' element = {<ShowGiveBook/>} />
          <Route exact path='/givebook/add' element = {<AddGiveBook/>} />
          <Route exact path='/givebook/:id/update' element = {<UpdateGiveBook/>} />

        </Routes>
      </Router>

    </div>
  );
}

export default App;
