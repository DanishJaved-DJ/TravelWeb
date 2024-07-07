import React from "react";
import {BrowserRouter,Route,Routes} from 'react-router-dom';
import Layout from './Pages/Layout';
import Home from './Pages/Home';
import About from './Pages/About';
import Blogs from './Pages/Blogs';
import BlogsDetails from './Pages/BlogsDetails';
import PlacesRoutes from './Pages/PlacesRoutes';
import NoPages from './Pages/NoPages';


function App() {
  return (
<>
<BrowserRouter>
  <Routes>
  <Route path="/" element={<Layout/>}>
  <Route index element={<Home/>} />
  <Route path="/about" element={<About/>} />
  <Route path="/blogs" element={<Blogs/>} />
  <Route path="/blogs/:id" element={<BlogsDetails/>} />
  <Route path="/places" element={<PlacesRoutes/>} />
  <Route path="*" element={<NoPages/>} />
    </Route>
  </Routes>
</BrowserRouter>
</>
  )
}

export default App
