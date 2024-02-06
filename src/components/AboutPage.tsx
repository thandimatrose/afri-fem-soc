import { ReactNode } from "react";
import AboutCard from "./AboutCard";

interface AboutPageProps {
  data: string[][];
}
const AboutPage = ({ data }: AboutPageProps) => {
  //About page card data:
  let aboutCards: ReactNode[] = [];

  for (let i = 0; i < data.length; i++) {
    const currPerson = data[i];
    console.log(currPerson[2]);
    aboutCards.push(
      <AboutCard
        name={currPerson[0]}
        title={currPerson[1]}
        biography={currPerson[2]}
        social="https://youtube.com"
        socialType="Youtube"></AboutCard>
    );
  }

  console.log(aboutCards.length);

  return (
    <div id="about-page">
      <h2>About Us</h2>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est voluptates
        suscipit, ut quas dolorem ullam provident, soluta nostrum eligendi,
        saepe cumque molestias nulla nisi facilis illum magni! Nihil quia iure
        quis placeat aspernatur officia dolorem ducimus corrupti at labore hic
        vel, nam unde temporibus sunt consequuntur. Eius totam est harum.
      </p>
      <div className="about-card-container">{aboutCards}</div>
    </div>
  );
};

export default AboutPage;
