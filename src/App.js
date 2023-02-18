import "./App.css";
import React from "react";
import axios from "axios";
import { useState } from "react";
import RenderImages from "./renderImages/RenderImages";

function App() {
  const [searchKey, setSearchKey] = useState("");
  const [data, setData] = useState([]);

  const searchTerm = async (e) => {
    if (searchKey !== "") {
      e.preventDefault();
      const { data } = await axios.get(
        `http://localhost:3001/searchImage?searchQuery=${searchKey}`
      );
      console.log(data.results);
      setData(data);
    } else console.log("error");
  };

  const getComponent = (item) => {
    return (
      <RenderImages
        item={item}
        key={item.id}
      />
    );
  };

  return (
    <div>
      <h1>Image search</h1>
      <form onSubmit={searchTerm}>
        <input
          className="searchbar"
          type="text"
          onChange={(e) => setSearchKey(e.target.value)}
        />
        <button type={"submit"}>search</button>
      </form>
      {data.map((item) => getComponent(item))}
    </div>
  );
}

export default App;
