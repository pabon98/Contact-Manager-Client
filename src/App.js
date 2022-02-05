import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Home from './Components/Home/Home';
import Contacts from './Components/Contacts/Contacts';
import AddContact from './Components/AddContact/AddContact';
import UpdateContact from './Components/UpdateContact/UpdateContact';
import Navbar from './Components/Navbar/Navbar';
import AuthProvider from './Contexts/AuthProvider';
import Registration from './Components/Registration/Registration';
import Login from './Components/Login/Login';
import PrivateRoute from './Components/Login/PrivateRoute/PrivateRoute';


function App() {
  return (
    <div className="App">
     <AuthProvider>
     <Router>
        <Navbar></Navbar>
        <Routes>
          <Route path='/' element={<Home/>}>
          </Route>
          <Route path="/contacts" element={<PrivateRoute>
            <Contacts/>
          </PrivateRoute>}></Route>
          <Route path="/contacts/add" element={<PrivateRoute>
            <AddContact/>
          </PrivateRoute>}></Route>
          <Route path="/contacts/update/:id" element={<UpdateContact/>}></Route>
          <Route path="/registration" element={<Registration/>}></Route>
          <Route path="/login" element={<Login/>}></Route>
        </Routes>
      </Router>
     </AuthProvider>
    </div>
  );
}

export default App;
