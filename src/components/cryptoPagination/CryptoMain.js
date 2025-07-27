import React, { useEffect, useState } from "react";
import axios from "axios";
import CryptoList from "./CryptoList";
import CryptoPagination from "./CryptoPagination";
import "./CryptoMain.css";

const CryptoMain = () => {
  const [coinsData, setCoinsData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(8);

  useEffect(() => {
    async function fetchData() {
      const response = await axios.get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false"
      );

      setCoinsData(response.data);
    }
    fetchData();
  }, []);
  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;
  const currentPosts = coinsData.slice(firstPostIndex, lastPostIndex);

  return (
    <div className="CryptoMain">
      <h1>Crypto Gallery</h1>
      <CryptoList coinsData={currentPosts} />
      <CryptoPagination
        totalPosts={coinsData.length}
        postsPerPage={postsPerPage}
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
      />
    </div>
  );
};

export default CryptoMain;
