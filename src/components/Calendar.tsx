import { useState } from "react";
import MonthCal from "./MonthCal";

class CalendarEvent {
  private date: Date;
  private time: string;
  private name: string;
  private location: string;
  private details: string;

  public constructor(
    arr: [
      date: Date,
      time: string,
      name: string,
      location: string,
      details: string
    ]
  ) {
    this.date = arr[0];
    this.time = arr[1];
    this.name = arr[2];
    this.location = arr[3];
    this.details = arr[4];
  }
  public getDate(): Date {
    return this.date;
  }

  public getName(): string {
    return this.name;
  }
  public getLocation(): string {
    return this.location;
  }
  public getDetails(): string {
    return this.details;
  }
  public getTime(): string {
    return this.time;
  }

  public static getDate(dateArr: number[]): Date {
    return new Date(dateArr[0], dateArr[1], dateArr[2]);
  }
}

//const EmptyDate = new CalendarEvent();

const Calendar = () => {
  const [featuredEvent, setFeaturedEvent] = useState(
    new CalendarEvent([new Date(), "", "", "", ""])
  );

  console.log("column-focus-" + featuredEvent.getDate().getDay);

  const [year, setYear] = useState(2024);
  const [month, setMonth] = useState(2);

  return (
    <>
      <div className={"page-container"}>
        <div id="calendar-header">
          <img src="/backgroundgraphics/calendarback1.png" className="centre" />
          <h2>
            Monthly <br />
            Calendar
          </h2>
        </div>
        <div id="calendar-page">
          <div
            id="event-details"
            className={"column-focus-" + featuredEvent.getDate().getDay()}>
            <div>
              <h3>Event Details</h3>
              <span className="name">{featuredEvent.getName()}</span>
              <br></br>
              <span className="time">@{featuredEvent.getTime()}</span>
              <br></br>
              <span className="location">{featuredEvent.getLocation()}</span>
              <br></br>
              <p>{featuredEvent.getDetails()}</p>
            </div>
          </div>
          <div id="calendar-content">
            <MonthCal
              month={month}
              year={year}
              onEventClick={(
                event: [
                  date: Date,
                  time: string,
                  name: string,
                  location: string,
                  details: string
                ]
              ) => setFeaturedEvent(new CalendarEvent(event))}
              onBackMonth={() => {
                setMonth((month + 11) % 12);
                setYear(year - Math.floor((12 - month) / 12));
              }}
              onForwardMonth={() => {
                setMonth((month + 1) % 12);
                setYear(year + Math.floor((month + 1) / 12));
              }}></MonthCal>
          </div>
        </div>
      </div>
    </>
  );
};

export default Calendar;
