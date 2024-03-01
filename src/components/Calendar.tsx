import WeeklyCalendar from "./WeeklyCalendar";

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
  return (
    <>
      <div className={"page-container"}>
        <div className="calendar-container">
          <div id="calendar-page">
            <div id="calendar-content">
              <WeeklyCalendar></WeeklyCalendar>
            </div>

            <img
              src="/backgroundgraphics/calendarback1.png"
              className="centre"
            />
          </div>
          <div id="calendar-header">
            <h2>
              Weekly <br /> 
              Calendar
            </h2>
          </div>
        </div>
      </div>
    </>
  );
};

export default Calendar;
