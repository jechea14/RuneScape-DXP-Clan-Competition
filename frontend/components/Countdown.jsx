import React, { useState, useEffect } from "react";

function Countdown() {
  const countDate = new Date("Feb 26, 2024 04:00:00").getTime();
  //   const now = new Date().getTime();
  //   const gap = countDate - now;
  const [gap, setGap] = useState(countDate - new Date().getTime());

  useEffect(() => {
    const intervalId = setInterval(() => {
      const now = new Date().getTime();
      const newGap = countDate - now;
      setGap(newGap >= 0 ? newGap : 0);
    }, 1000);

    return () => clearInterval(intervalId);
  }, [countDate]);

  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  return (
    <div>
      <h3>
        DXP ends in: {Math.floor(gap / day)} Days{" "}
        {Math.floor((gap % day) / hour)} Hours{" "}
        {Math.floor((gap % hour) / minute)} Minutes{" "}
        {Math.floor((gap % minute) / second)} Seconds
      </h3>
    </div>
  );
}

export default Countdown;
