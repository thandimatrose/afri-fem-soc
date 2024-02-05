import React, { ReactNode, useState } from "react";
import { timekeeper } from "../utils/Timekeeper";
import calendar from "../data/calendar_data.json";

interface MonthCalProps {
  month: number;
  year: number;
  onEventClick: (
    event: [
      date: Date,
      time: string,
      name: string,
      location: string,
      details: string
    ]
  ) => void;
  onBackMonth: () => void;
  onForwardMonth: () => void;
}

const MonthCal = ({
  month,
  year,
  onBackMonth,
  onEventClick,
  onForwardMonth,
}: MonthCalProps) => {
  console.log("the date is " + month + " " + year);
  let monthCalendar: ReactNode = <></>;

  monthCalendar = <>{createCalendar(year, month, onEventClick)}</>;

  return (
    <>
      <div id="month-calendar-controller">
        <span className="material-symbols-outlined" onClick={onBackMonth}>
          arrow_back_ios
        </span>
        <h3>{timekeeper.monthNames[month] + " " + year}</h3>
        <span className="material-symbols-outlined" onClick={onForwardMonth}>
          arrow_forward_ios
        </span>
      </div>
      <div
        id="month-calendar"
        className={"" + timekeeper.monthNames[month] + " column-focus-"}>
        {monthCalendar}
      </div>
    </>
  );
};

export default MonthCal;

function createCalendar(
  year: number,
  month: number,
  onEventClick: (
    event: [
      date: Date,
      time: string,
      name: string,
      location: string,
      details: string
    ]
  ) => void
) {
  let tableCells: ReactNode[] = [];
  tableCells = [];

  addDayHeadings(tableCells);
  //previous month
  addPrevMonth(tableCells, month, year);
  //current month
  addCurrMonth(tableCells, month, year, onEventClick);
  //next month
  addNextMonth(tableCells, month, year);

  return tableCells;
}

function addNextMonth(tableCells: ReactNode[], month: number, year: number) {
  const firstDayOfWeek = new Date(year, month, 1).getDay();
  const daysOfMonth = getMonthDaysCount(month, year);

  for (let i = 1; i <= (7 - ((firstDayOfWeek + daysOfMonth) % 7)) % 7; i++) {
    tableCells.push(<div className={"next-month cell month-cal"}>{i}</div>);
  }
}

function addDayHeadings(tableCells: ReactNode[]) {
  for (let i = 0; i < timekeeper.daysOfTheWeek.length; i++) {
    tableCells.push(
      <div className={"table-header " + timekeeper.daysOfTheWeek[i]}>
        {timekeeper.daysOfTheWeek[i]}
      </div>
    );
  }
}

function addPrevMonth(tableCells: ReactNode[], month: number, year: number) {
  const firstDayOfWeek = new Date(year, month, 1).getDay();
  for (let i = 0; i < firstDayOfWeek; i++) {
    tableCells.push(
      <div className={"previous-month cell month-cal"} key={0 - i + "bb"}>
        {getMonthDaysCount(month - 1, year) - firstDayOfWeek + 1 + i}
      </div>
    );
  }
}
function getMonthDaysCount(month: number, year: number) {
  return new Date(year, (month + 1) % 12, 0).getDate();
}

function addCurrMonth(
  tableCells: ReactNode[],
  month: number,
  year: number,
  onEventClick: (
    event: [
      date: Date,
      time: string,
      name: string,
      location: string,
      details: string
    ]
  ) => void
) {
  let daysOfMonth = getMonthDaysCount(month, year);
  for (let i = 1; i <= daysOfMonth; i++) {
    let currday = i;
    const singleEvents = calendar.events[0].oneTime;
    let eventString: ReactNode[] = [];

    for (let j = 0; singleEvents != undefined && j < singleEvents.length; j++) {
      const currEvent = singleEvents[j];
      const isThisDay =
        currEvent.date[2] == year &&
        currEvent.date[1] == month &&
        currEvent.date[0] == i;

      if (isThisDay) {
        eventString.push(
          <div
            className="one-time"
            onClick={() =>
              onEventClick([
                getDate(currEvent.date),
                "6am",
                currEvent.name,
                currEvent.location,
                currEvent.info,
              ])
            }>
            <span className="name">{currEvent.name}</span>
            <br></br>
            <span className="location">@{currEvent.name}</span>
            <br></br>
            <span>{currEvent.info}</span>
          </div>
        );
      }
    }
    tableCells.push(
      <div
        className={
          "current-month cell month-cal date-" + i + "-" + month + "-" + year
        }>
        {currday}
        <br />
        {eventString}
      </div>
    );
  }
  function getDate(dateArr: number[]): Date {
    return new Date(dateArr[0], dateArr[1], dateArr[2]);
  }
}
