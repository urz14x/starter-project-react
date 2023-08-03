import React from "react";
import { Link, Route, Routes } from "react-router-dom";
// import Beranda from "./views/Beranda";
// import Posts from "./views/Posts";
// import DetailPost from "./views/DetailPost";

export default function App() {
  return (
    <>
      <nav className="bg-blue-600 p-5">
        <ul className="flex items-center text-gray-100 space-x-10">
          <li className="hover:text-white">
            <Link to={"/"}>Home</Link>
          </li>
          <li className="hover:text-white">
            <Link to={"/posts"}>Posts</Link>
          </li>
        </ul>
      </nav>
      {/* <Routes>
        <Route path="/" element={<Beranda />}></Route>
        <Route path="/posts" element={<Posts />}></Route>
        <Route path="/posts/post/:id" element={<DetailPost />}></Route>
      </Routes> */}
    </>
  );
}
