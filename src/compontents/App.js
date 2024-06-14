// App.js
import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { v4 as uuid } from "uuid";
import Navbar from "./Navbar.js";
import Addpost from "./addpost.js";
import Postslist from "./Postslist.js";
import Contact from "./contact.js";

function App() {
  const Localstoragekey='posts';
  
  const [posts, setPosts] = useState(() => {
        const storedPosts = localStorage.getItem(Localstoragekey);
        return storedPosts ? JSON.parse(storedPosts) : [];
  });

  const addPostHandler = (post) =>{
    setPosts([...posts, {id: uuid(), ...post}]);
  };

  const removePostHandler = (id) => {
    const newPostList = posts.filter((post)=> {
      return post.id !== id;
    });
    setPosts(newPostList);
  };

  useEffect(() => {
    localStorage.setItem(Localstoragekey, JSON.stringify(posts));
  }, [posts]);

  return (
    <div className="ui container">
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Postslist posts={posts} removePostHandler={removePostHandler} />} />
        <Route
            path="/addpost"
            element={<Addpost addPostHandler={addPostHandler} />}
          />
        <Route path="/contact" element={<Contact/>}></Route>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
