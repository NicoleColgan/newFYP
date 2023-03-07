import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Landing from './component/Landing';
import Logging from './component/Logging';
import { Provider } from 'react-redux';
import store from './context/UserStore';
import React, { useState } from 'react'
import { createContext } from 'react';

//components (App) are used to render
//you can only return one parent so if you wrap them in empty tags, you can return more than 1
//The way routing works is that you show different components based on the different routes that you have defined
//i want to show the nav bar at all times so keep that outside the routes that were defining
//index is default page

export const UserContext = createContext();

export default function App() {
  const [user, setUser] = useState({
    id: "",
    firstName: "",
    lastName: "",
    email: "",
    password: ""
  });


  return (
    <UserContext.Provider value={{ user, setUser }}>
      <BrowserRouter>
        <Routes>
          <Route path="/landing" element={<Landing />} />
          <Route index element={<Landing />} />
          <Route path="/logging" element={<Logging />} />
        </Routes>
      </BrowserRouter>
    </UserContext.Provider>
  );
}