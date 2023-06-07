import './App.css';
import Header from "./components/Header/Header";
import {useState} from "react";
import AddUser from "./components/AddUser/AddUser";
import {Route, Routes} from "react-router-dom";
import Param from "./components/Param/Param";
import Profile from "./components/Profile/Prodile";
import Users from "./components/Users/Users";
import GenerateDoc from "./components/GenerateDoc/generateDoc";
import Auth from "./components/Auth/Auth";

function App() {
    const [auth,setAuth] = useState(true)
  return (
    <div className="container app">
     <div className="main-block">
             {
                 auth ?
                     <>
                         <Header/>
                         <main className="main">
                                 <Routes>
                                     <Route path="/" element={<AddUser/>}/>
                                     <Route path="/param" element={<Param/>}/>
                                     <Route path="/profile" element={<Profile/>}/>
                                     <Route path="/users" element={<Users/>}/>
                                     <Route path="/generate_doc" element={<GenerateDoc/>}/>
                                 </Routes>
                         </main>
                     </> : <Routes>
                        <Route path="/auth" element={<Auth/>}/>
                     </Routes>
             }
     </div>
    </div>
  );
}

export default App;
