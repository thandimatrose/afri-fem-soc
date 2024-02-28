import { ReactNode, useState } from "react";
import Calendar from "./Calendar";

const shortenDay = (longDay: string) => {
  let shortDay = longDay.replace("day", "");
  return shortDay.length > 4 ? shortDay.slice(0, 3) : shortDay;
};

const [week, setWeek] = useState(2);
const today = new Date();
console.log(today.getFullYear());

const WeeklyCalendar = () => {
  let calendarDays: ReactNode[] = [];
  const daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  for (let i = 0; i < daysOfWeek.length; i++) {
    if (true) {
      calendarDays.push(
        <div className="day">
          <h5>{daysOfWeek[i]}</h5>
          <div className="event">
            <h6>Discussion</h6>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
              doloribus tempora amet debitis id praesentium.
            </p>
          </div>
        </div>
      );
    }
  }

  return (
    <div id="weekly-cal">
      <div className="controller">
        <span className="material-symbols-outlined end">arrow_back_ios</span>
        Month Week 3
        <span className="material-symbols-outlined">arrow_forward_ios</span>
      </div>
      <div id="calendar-days">{calendarDays}</div>
    </div>
  );
};

export default WeeklyCalendar;
