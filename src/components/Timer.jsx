import { useEffect, useState } from "react";

const Timer = () => {
  const [time, setTime] = useState({ hours: 0, minutes: 0, seconds: 0 });
  const { hours, minutes, seconds } = time;

  const incrementClock = () => {
    setTime((previousTime) => {
      let { hours, minutes, seconds } = previousTime;

      seconds += 1;
      if (seconds === 60) {
        seconds = 0;
        minutes += 1;
      }

      if (minutes === 60) {
        minutes = 0;
        hours = hours + 1;
      }

      return { hours, minutes, seconds };
    });
  };


  return (
      <p className="timer">
        {hours}:{String(minutes).padStart(2, '0')}:{String(seconds).padStart(2, '0')}
      </p>
  );
};

export default Timer;
