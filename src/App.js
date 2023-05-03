import './App.css';
import Login from './components/Login';
import Accounts from './components/Accounts';
import Verification  from './components/Verification';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainPage from './components/MainPage';

import OnBoard from './components/OnBoard';
import { useLoader, useFrame } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

function App() {
  console.log("app page");
  return (
    <>
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Accounts/>}></Route>
    <Route path="/login" element={<Login/>} ></Route> 
    <Route path="/onboard" element={<OnBoard/>}></Route>
    <Route path='/mainpage' element={<MainPage/>}></Route>
    <Route path='/verify' element={<Verification/>}></Route>
    </Routes>
    </BrowserRouter>
    </>
      
   
  );
};

export default App;
