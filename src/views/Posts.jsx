import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Posts() {
  const [posts, setPosts] = useState([]);
  async function getPosts() {
    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/posts/"
      );
      // console.log(response.data);
      setPosts(response.data);
    } catch (error) {
      console.log(error.message);
    }
  }
  useEffect(() => {
    getPosts();
  }, []);
  return (
    <section className="p-5">
      <h1 className="text-3xl font-bold text-gray-600 mb-5">Posts user</h1>
      {posts.map((post, idx) => {
        return (
          <div
            className="w-full border-2 border-gray-600 rounded-lg p-2 mb-2 cursor-pointer hover:border-blue-500"
            key={idx}
          >
            <p className="font-bold">Title: {post.title}</p>
            <hr />
            <p>{post.body}</p>
            <Link to={`/posts/post/${post.id}`}>
              <span className="underline">Read more</span>
            </Link>
          </div>
        );
      })}
    </section>
  );
}
