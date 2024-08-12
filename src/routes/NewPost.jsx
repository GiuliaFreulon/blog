import blogFetch from "../axios/config";

import { useState } from "react";
import { useNavigate } from "react-router-dom";

import "./NewPost.css";

const NewPost = () => {
  const navigate = useNavigate();

  const [title, setTitle] = useState();
  const [body, setBody] = useState();

  const createPost = async (e) => {
    e.preventDefault();

    const post = { title, body, userId: 1 };

    await blogFetch.post("/posts", {
      body: post,
    });

    navigate("/");
  };

  return (
    <div className="new-post">
      <h2>Criar novo Post</h2>
      <form onSubmit={(e) => createPost(e)}>
        <div className="form-control">
          <label htmlFor="title">Título:</label>
          <input
            type="text"
            name="title"
            placeholder="Digite o título"
            id="title"
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="form-control">
          <label htmlFor="body">Post:</label>
          <textarea
            name="body"
            id="body"
            placeholder="O que você está pensando?"
            onChange={(e) => setBody(e.target.value)}
          ></textarea>
        </div>
        <div className="submit-btn">
          <input type="submit" value="Postar" className="btn" />
        </div>
      </form>
    </div>
  );
};

export default NewPost;
