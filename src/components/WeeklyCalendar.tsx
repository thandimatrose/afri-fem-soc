import { ReactNode, useState } from "react";
import calendar from "../data/events.json";

const today = new Date();
console.log(today.getFullYear());

const WeeklyCalendar = () => {
  let calendarDays: ReactNode[] = [];
  const daysOfWeek = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];

  const [qWeek, setQWeek] = useState(3);
  const [focusDate, setFocusDate] = useState(new Date());

  const today = new Date();
  console.log("day" + today.getDay());
  const events = calendar.events;
  for (let i = 0; i < events.length; i++) {
    console.log("JJJ");
  }
  const monthNames = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sept",
    "Oct",
    "Nov",
    "Dec",
  ];

  for (let i = 0; i < daysOfWeek.length; i++) {
    const currDate = new Date();
    for (let j = 0; j < focusDate.getDay() - i; j++) {
      currDate.setDate(currDate.getDate() - 1);
    }

    for (let j = 0; j < i - focusDate.getDay(); j++) {
      currDate.setDate(currDate.getDate() + 1);
    }
    const calEvents: ReactNode[] = [];
    for (let j = 0; j < events.length; j++) {
      const currEvent = events[j];
      const eventDate = currEvent.date;
      if (
        eventDate[0] == currDate.getDate() &&
        eventDate[1] == currDate.getMonth() &&
        eventDate[2] == currDate.getFullYear()
      ) {
        calEvents.push(
          <>
            {currEvent.type != "" ? <h6>{currEvent.type} </h6> : ""}

            {currEvent.name != "" ? (
              <h5 className="event-title"> {currEvent.name} </h5>
            ) : (
              ""
            )}
            {currEvent.leader != "" ? <p>by {currEvent.leader} </p> : ""}

            {currEvent.info != "" ? <p>{currEvent.info} </p> : ""}
            {currEvent.link != "" ? <a href={currEvent.link}>More Info</a> : ""}
          </>
        );
      }
    }

    calendarDays.push(
      <div className="day">
        <div id="date-label">
          <span className="bignumber">{currDate.getDate()}</span>
          <br />
          <span className="bigmonth">
            {monthNames[currDate.getMonth()].toString().substring(0, 3)}
          </span>
        </div>
        <div className="event">
          <h5>{daysOfWeek[(i + 6) % 7]}</h5>
          {calEvents}
        </div>
      </div>
    );
  }

  return (
    <div id="weekly-cal">
      <div className="controller">
        <a
          onClick={() =>
            qWeek >= 2 && qWeek <= 6
              ? () => {
                  console.log("eish");
                  setQWeek(qWeek - 1);
                  const newDate = new Date();
                  newDate.setDate(focusDate.getDate() - 7);
                  setFocusDate(newDate);
                }
              : console.log("Cannot go before week 1 or after week 6")
          }>
          <span className="material-symbols-outlined end"></span>
        </a>
        Quarter 1 - Week {qWeek}
        <a>
          <span
            className="material-symbols-outlined"
            onClick={() =>
              qWeek >= 1 && qWeek <= 5
                ? () => {
                    setQWeek(qWeek + 1);
                    const newDate = new Date();
                    for (let i = 0; i < 7; i++) {
                      newDate.setDate(focusDate.getDate() + 1);
                    }
                    setFocusDate(newDate);
                  }
                : console.log("Cannot go before week 1 or after week 6")
            }></span>
        </a>
      </div>
      <div id="calendar-days">{calendarDays}</div>
    </div>
  );
};

function getPreviousDay(date = new Date()) {
  const previous = new Date(date.getTime());
  previous.setDate(date.getDate() - 1);

  return previous;
}

export default WeeklyCalendar;
