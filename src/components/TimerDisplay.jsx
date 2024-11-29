import { useState } from "react";
import Timer from "./Timer";

const TimerDisplay = () => {
  const [timerShown, setTimerShown] = useState(true);
  return (
    <div className="timer-display ">
      {timerShown ? <Timer/> : null}
      <button onClick={() => setTimerShown(!timerShown)}>{timerShown ? 'Hide Timer' : 'Show Timer'}</button>
    </div>
  );
}

export default TimerDisplay;