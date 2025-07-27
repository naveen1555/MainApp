import React from "react";
import "./Pagination.css";
const Pagination = ({ data, pageHandler }) => {
  let pagenumbers = [];
  for (let i = 1; i < Math.ceil(data.length / 10) + 1; i++) {
    pagenumbers.push(i);
  }
  return (
    <div>
      <div className="page-numbers">
        {pagenumbers.map((page) => (
          <button onClick={() => pageHandler(page)} className="page-button">
            {page}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Pagination;
