import { ReactNode } from "react";
import WeeklyCalendar from "./WeeklyCalendar";

interface HomePage {
  children: ReactNode;
}

const HomePage = () => {
  return (
    <>
      <div id="home-container">
        <div>
          <h2 className="welcome-txt">Welcome!</h2>

          <img src="groupimage.jpg"></img>
          <p className="tagline">We are the African Feminist Society</p>

          <div className="intro">
            <p>
              <img src="/logo-smaller.jpg" />
              Founded in 2023, we are a community of students who align with the
              values of intersectional African Feminism. Our community is a safe
              space to learn, unlearn and grow based on our{" "}
              <a href="https://docs.google.com/document/d/1mNHpY-JLKfmJb68zX2DP0MBFBEdQhDcy-H5i-fmtTnI/">
                guiding principles
              </a>
              . We have meetings on campus every Thursday that oscillate between
              community building and consciousness raising
            </p>

            <p>
              In our conception, we have been supported by the{" "}
              <a href="https://humanities.uct.ac.za/agi">
                African Gender Institute
              </a>
              . We hope to continue on this vein and partner with NGOs and UCT
              based organizations in the future.
            </p>
          </div>
          <a
            href="https://chat.whatsapp.com/I6YbrEUt14fBZfOfNUW0mZ"
            className="whatsapp-details">
            <div id="whatsapp-details">
              <p>
                Want to attend our meetings? <br />
                Join our Whatsapp Group!{" "}
              </p>
              <div>
                <img src="/whatsappqr.png" />
              </div>
            </div>
          </a>
        </div>
        <div id="calendar-content">
          <WeeklyCalendar></WeeklyCalendar>
        </div>
      </div>
    </>
  );
};

export default HomePage;
