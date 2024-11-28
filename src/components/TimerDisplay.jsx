import { useState } from "react";
import Timer from "./Timer";

const TimerDisplay = () => {
  const [timerShown, setTimerShown] = useState(true);
  return (
    <div className="flex flex-col items-center">
      {timerShown ? <Timer/> : null}
      <button className="w-fit text-xl font-medium font-[Lato,sans-serif]" onClick={() => setTimerShown(!timerShown)}>{timerShown ? 'Hide Timer' : 'Show Timer'}</button>
    </div>
  );
}

export default TimerDisplay;