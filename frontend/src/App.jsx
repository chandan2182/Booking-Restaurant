import { BrowserRouter, Link,  Routes, Route } from "react-router-dom";
import './App.css';
import Navbar from "./components/Navbar";
import Home  from "./components/Home";
import Signup from "./components/Signup";
import Login from "./components/Login";
import { AppProvider } from "./AppContext";
import BrowseRestaurants from "./components/BrowseRestaurants";


function App() {
  return (
    <BrowserRouter>
      <AppProvider>
          <Navbar/>
              <Routes>  
                 <Route element={<Home />} path="/" /> 
                  <Route element={<Signup />} path="/signup" />
                   <Route element= {<Login />} path="/login"/>
                   <Route element= {<BrowseRestaurants />} path="/Browse"/>
                   
              </Routes>
    </AppProvider>
    </BrowserRouter>
  );
    
  }
export default App;
