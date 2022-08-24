import axios from "axios";
import { useEffect, useState } from "react";
import "./App.css";
import PostCard from "./Components/PostCard";

function App() {
  const [users, setUsers] = useState([]); // where to store the returned data
  const [error, setError] = useState(null); // where to store the coming errors

  /* GETTING POSTS WITH FETCH */
  useEffect(() => {
    function fetchData() {
      // the function to fetch data from the api
      fetch("https://jsonplaceholder.typicode.com/users")
        .then((res) => res.json()) // when the result comes back with success here is what to do
        .then((res) => {
          const selectedPosts = res.slice(0, 10);
          setUsers(selectedPosts);
        })
        .catch((err) => setError(err)); // if there is an error here what you have to do.
    }
    fetchData();
  }, []);

  /* GETTING POSTS WITH AXIOS GET */
  //  useEffect(() => {
  //    axios
  //      .get("https://jsonplaceholder.typicode.com/users")
  //      .then((res) => {
  //        const selectedPosts = res.data.slice(0, 10); // data is a promise
  //        setUsers(selectedPosts);
  //      })
  //      .catch((err) => setError(err));
  //  }, []);

  return (
    <div className="App">
      {users.map((post) => {
        return <PostCard className="Card" key={post.id} post={post} />;
      })}
    </div>
  );
}

export default App;
