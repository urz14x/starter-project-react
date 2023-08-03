import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function DetailPost() {
  const { id } = useParams();
  const [post, setPost] = useState([]);
  const [loading, setLoading] = useState(true);

  async function getPost() {
    setLoading(true);
    try {
      const response = await axios.get(
        `https://jsonplaceholder.typicode.com/posts/${id}`
      );
      // console.log(response.data);
      setPost(response.data);
      setLoading(false);
    } catch (error) {
      setLoading(true);
      console.log(error.message);
    }
  }
  useEffect(() => {
    getPost();
  }, [id]);

  return (
    <div className="p-5">
      {loading ? (
        <div>loading . . .</div>
      ) : (
        <div className=" p-2">
          <h2 className="font-bold text-3xl text-gray-700 mb-10">
            Title: {post.title}
          </h2>
          <p className=" text-md">Content: {post.body}</p>
        </div>
      )}
    </div>
  );
}
