import WeeklyCalendar from "./WeeklyCalendar";


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
