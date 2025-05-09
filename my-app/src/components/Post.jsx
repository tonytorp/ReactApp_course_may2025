import { useState } from "react";
import { useEffect } from "react";

const postData = {
  userId: 0,
  id: 0,
  title: "Click GetPost to fetch the post data",
  body: "",
};

const Post = ({ id }) => {
  const [post, setPost] = useState(postData);
  // useEffect suoritetaan, kun komponentti käynnistyy
  useEffect(() => {
    getPost(); // Haetaan postin tiedot heti käynnistyessä
  }, []);

  const getPost = async () => {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/posts/" + id
    );
    const postJson = await response.json();
    setPost(postJson);
    console.log(postJson);
  };
  return (
    <div>
      <h1>Title</h1>
      <h2>{post.title}</h2>
      <br></br>
      <h2>Body</h2>
      <h3>{post.body}</h3>
      <button onClick={getPost}>Get Post</button>
    </div>
  );
};

export default Post;
