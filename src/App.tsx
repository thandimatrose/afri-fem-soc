import { ReactNode, useState } from "react";
import NavigationBar from "./components/NavigationBar";
import AboutPage from "./components/AboutPage";
import HomePage from "./components/HomePage";
import NewsletterPage from "./components/NewsletterPage";
import ArchivePage from "./components/ArchivePage";
import "./App.css";
import Footer from "./components/Footer";
import Title from "./components/Title";
import ResourcesPage from "./components/ResourcesPage";
import Calendar from "./components/Calendar";

//import * as fs from "fs";

function App() {
  const pages = [
    "Home",
    "Calendar",
    "About",
    "Newsletter",
    "Resources",
    "Archive",
  ];
  const [page, setPage] = useState("Home");

  //About
  const aboutData = [
    [
      "Helen",
      "Role Descript",
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Commodi sed quo debitis alias earum saepe quod non in recusandae voluptate!",
    ],
    [
      "Philisa",
      "Role Descript",
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Commodi sed quo debitis alias earum saepe quod non in recusandae voluptate!",
    ],
    [
      "Jess",
      "Role Descript",
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Commodi sed quo debitis alias earum saepe quod non in recusandae voluptate!",
    ],
    [
      "Mphatso",
      "Role Descript",
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Commodi sed quo debitis alias earum saepe quod non in recusandae voluptate!",
    ],

    [
      "Emma",
      "Role Descript",
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Commodi sed quo debitis alias earum saepe quod non in recusandae voluptate!",
    ],
    [
      "Thandi",
      "Role Descript",
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Commodi sed quo debitis alias earum saepe quod non in recusandae voluptate!",
    ],
  ];

  //let rawData = fs.readFileSync("path-to-your-json-file.json", "utf8");
  //let jsonData = JSON.parse(rawData);

  //all the pages in array
  const pagesNode: ReactNode[] = [
    <HomePage />,

    <Calendar></Calendar>,
    <AboutPage data={aboutData} />,
    <NewsletterPage />,
    <ResourcesPage></ResourcesPage>,
    <ArchivePage />,
  ];

  return (
    <>
      <Title onHome={page === "Home"}></Title>
      <NavigationBar
        pages={pages}
        onSelectPage={(selectPage: string) =>
          setPage(selectPage)
        }></NavigationBar>

      <div id="page-container">{pagesNode[pages.indexOf(page)]}</div>
      <Footer
        pages={pages}
        onSelectPage={(selectPage: string) => setPage(selectPage)}></Footer>
    </>
  );
}

export default App;
