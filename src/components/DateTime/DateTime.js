import React, { useState, useEffect } from "react";
import "./timeDate.css";
const DateTime = () => {
  const [time, setTime] = useState("");

  useEffect(() => {
    const intervalId = setInterval(() => {
      updateTime();
    }, 1000);
    return () => clearInterval(intervalId);
  }, []);

  function updateTime() {
    let year = new Date().getFullYear();

    let month = new Date().getMonth();
    month = month < 10 ? "0" + month : month;
    let day = new Date().getDay();
    day = day < 10 ? "0" + day : day;
    let hours = new Date().getHours();
    if (hours > 12) {
      hours = hours - 12;
    }

    let minutes = new Date().getMinutes();
    let seconds = new Date().getSeconds();
    hours = hours < 10 ? "0" + hours : hours;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;
    let timeString = `${hours} : ${minutes} : ${seconds}`;
    let dateMonthYear = `${day} - ${month} - ${year}`;
    console.log(dateMonthYear);
    setTime(timeString);
  }

  return (
    <>
      <br />
      <span className="datetime">{time}</span>
    </>
  );
};

export default DateTime;

// import React, { useState } from "react";

// const DateTime = () => {
//   const [date, setDate] = useState([]);
//   function updateTime() {
//     let hours = new Date().getHours();
//     if (hours > 12) {
//       hours = hours - 12;
//     }
//     let minutes = new Date().getMinutes();
//     let seconds = new Date().getSeconds();
//     hours = hours < 10 ? "0" + hours : hours;
//     minutes = minutes < 10 ? "0" + minutes : minutes;
//     seconds = seconds < 10 ? "0" + seconds : seconds;
//     console.log(hours, minutes, seconds);
//     let finalTime = `${hours} : ${minutes} : ${seconds}`;
//     setDate(finalTime);
//   }
//   setTimeout(updateTime, 1000);
//   return (
//     <div>
//       <span
//         style={{
//           backgroundColor: "black",
//           color: "white",
//           padding: "1rem",
//           fontWeight: "bold",
//         }}
//       >
//         {date}
//       </span>
//     </div>
//   );
// };

// export default DateTime;
