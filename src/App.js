import {Route, Routes} from "react-router-dom";
import './App.css';
import { Dashboard } from "./Pages/Dashboard";
import { Login } from "./Pages/Login";
import { Signup } from "./Pages/Signup";
import { AddData } from "./Pages/Product/AddData";
import { DataList } from "./Pages/Product/GetAllData";
import { UpdateData } from "./Pages/Product/EditData";
import { DeleteData } from "./Pages/Product/DeleteData";
import { DataDetails } from "./Pages/Product/IndividualData";
import { HomePage } from "./Pages/HomePage";






function App() 
{
  return (
        
      <div className="App">
        <Routes>
          <Route exact path="/" element={<HomePage/>} />
          <Route exact path="/user/login" element={<Login/>} />
          <Route exact path="/user/signup" element={<Signup/>} />
          <Route exact path="/form/add" element={<AddData/>} />
          <Route exact path="/form/all" element={<Dashboard/>} />
          <Route exact path="/form/:id" element={<DataDetails/>} />
          <Route exact path="/form/edit/:id" element={<UpdateData/>} />
          <Route exact path="/form/delete/:id" element={<DeleteData/>} />
          
        </Routes>
      </div>
  ); 
}


export default App;







