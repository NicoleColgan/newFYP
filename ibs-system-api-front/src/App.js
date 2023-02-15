import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Landing from './component/Landing';
import Logging from './component/Logging';
//components (App) are used to render
//you can only return one parent so if you wrap them in empty tags, you can return more than 1
//The way routing works is that you show different components based on the different routes that you have defined
//i want to show the nav bar at all times so keep that outside the routes that were defining
//index is default page
function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/landing" element={<Landing />}></Route>
        <Route index element={<Logging />}></Route>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
