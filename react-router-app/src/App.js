import React from 'react'
import {BrowserRouter, Routes, Route } from 'react-router-dom'

import './App.css';

import Blogs from './pages/blog/Blogs'
import Blog from './pages/blog/Blog'
import BlogForm from './pages/blog/BlogForm'
import Contacts from './pages/contact/Contacts'
import Contact from './pages/contact/Contact'
import AddContact from './pages/contact/AddContact'
import EditContact from './pages/contact/EditContact'
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/blogs" element={<Blogs/>}/>
          <Route path="/blogs/:id" element={<Blog/>}/>
          <Route path="/blogForm" element={<BlogForm/>}/>    
          
          <Route path="/contacts" element={<Contacts/>}/>
          <Route path="/contact/:emailid" element={<Contact/>}/>
          <Route path="/addContact" element={<AddContact/>}/>       
          <Route path="/editContact/:id" element={<EditContact/>}/> 
        </Routes>
      </BrowserRouter>
    </div>
    
  );
}

export default App;
