import "./clock.css"

import { timePicker } from "analogue-time-picker";
import { useEffect } from "react";

const clock=()=> {
  useEffect(() => {
      timePicker({
        element: document.getElementById("onPage"),
        mode: 12,
        width: "150px",
        time:  new Date()
      })
  }, []);
  return (
    <div className="">
      <div id="onPage"></div>
    </div>
  );
}

export default clock;