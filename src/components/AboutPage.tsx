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
        socialType="Youtube"
      ></AboutCard>
    );
  }

  console.log(aboutCards.length);

  return (
    <div>
      <h2>About Us</h2>
      <div className="about-card-container">{aboutCards}</div>
    </div>
  );
};

export default AboutPage;
