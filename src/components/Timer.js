import { useEffect } from "react";

function Timer({ dispatch, secondRemaining }) {
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
      <p>{secondRemaining}</p>
    </div>
  );
}

export default Timer;
