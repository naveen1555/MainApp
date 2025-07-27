import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import Pagination from "./Pagination";
const MainData = () => {
  const [data, setData] = useState([]);
  const [perpage, setPerpage] = useState([]);
  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/posts").then((res) => {
      setData(res.data);
      setPerpage(res.data.slice(1, 10));
    });
  }, []);
  const pageHandler = (pagenumber) => {
    setPerpage(data.slice(pagenumber * 10 - 10, pagenumber * 10));
  };
  return (
    <div>
      {data.length >= 1 ? (
        <div>
          {perpage.map((post) => (
            <div>{post.title}</div>
          ))}
          <br />
          <Pagination data={data} pageHandler={pageHandler} />
        </div>
      ) : (
        <p>Data not Loaded</p>
      )}
    </div>
  );
};

export default MainData;
