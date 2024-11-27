import { useState } from "react";
import Timer from "./Timer";

const TimerDisplay = () => {
  const [timerShown, setTimerShown] = useState(true);
  return (
    <div>
      <button onClick={() => setTimerShown(!timerShown)}>{timerShown ? 'Hide' : 'Show'}</button>
      {timerShown ? <Timer/> : null}
    </div>
  );
}

export default TimerDisplay;