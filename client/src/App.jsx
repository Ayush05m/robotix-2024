import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import './App.css'

import Home from './pages/Home';
import About from './pages/About';
import Signup from './pages/SignUp';
import Login from './pages/Login';
import Search from './pages/Search';
import Dashboard from './pages/Dashboard';
import CreatePost from './pages/CreatePost';
import UpdatePost from './pages/UpdatePost';
import Post from './pages/Post';
import PostPage from './pages/PostPage';

import OnlyAdmin from './components/OnlyAdmin';
import PrivateRoute from './components/PrivateRoute';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <Navbar />
      <main className="pt-0">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/sign-up" element={<Signup />} />
          <Route path="/log-in" element={<Login />} />
          <Route path="/search" element={<Search />}></Route>
          <Route element={<PrivateRoute />}>
            <Route path="/dashboard" element={<Dashboard />}></Route>
          </Route>
          <Route path="/create-post" element={<CreatePost />}></Route>
          <Route path="/update-post/:postId" element={<UpdatePost />}></Route>
          {/* <Route element={<OnlyAdmin />}></Route> */}
          <Route path="/post" element={<Post />}></Route>
          <Route path="/post/:postId" element={<PostPage />}></Route>
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;

// TODO:
//   1. serches route