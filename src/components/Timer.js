import { useEffect } from "react";

function Timer({ dispatch, secondRemaining }) {
  const minute = Math.ceil(secondRemaining / 60);
  const second = secondRemaining % 60;

  useEffect(
    function () {
      const id = setInterval(function () {
        dispatch({ type: "timer" });
      }, 1000);

      return () => clearInterval(id);
    },
    [dispatch]
  );

  return (
    <div className="timer">
      <p>{`${minute < 10 ? "0" : ""}${minute} : ${
        second < 10 ? "0" : ""
      }${second}`}</p>
    </div>
  );
}

export default Timer;
