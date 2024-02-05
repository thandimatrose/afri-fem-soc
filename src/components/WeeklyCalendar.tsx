import React from "react";
import { ReactNode } from "react";

const shortenDay = (longDay: string) => {
  let shortDay = longDay.replace("day", "");
  return shortDay.length > 4 ? shortDay.slice(0, 3) : shortDay;
};

const WeeklyCalendar = () => {
  let tableRows: ReactNode[] = [];
  let tableColumns: ReactNode[] = [];
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
    tableRows.push(
      <tr className={"table-header " + daysOfWeek[i]}>
        <th>{shortenDay(daysOfWeek[i])}</th>
        <td></td>
        <td></td>
      </tr>
    );
  }

  tableRows.push(<tr key="weekly-cal-header-row">{tableColumns}</tr>);

  return (
    <div>
      <table id="weekly-cal">{tableRows}</table>
    </div>
  );
};

export default WeeklyCalendar;