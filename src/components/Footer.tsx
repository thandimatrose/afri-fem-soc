import { ReactNode } from "react";

interface FooterProps {
  pages: string[];
  onSelectPage: (page: string) => void;
}

const Footer = ({ pages, onSelectPage }: FooterProps) => {
  let columnOne: ReactNode[] = [];
  for (let i = 0; i < pages.length; i++) {
    columnOne.push(
      <li key={"footer-" + pages[i]} onClick={() => onSelectPage(pages[i])}>
        <a>{pages[i]}</a>
      </li>
    );
  }
  return (
    <footer>
      <div className="content-container">
        <h3>African Feminist Society</h3>
        <h4>
          University of Cape Town <br />
          Rondebosch, 7700
          <br />
          Cape Town
        </h4>
        <div className="column-container">
          <div className="column-one">
            <ul>{columnOne}</ul>
          </div>
          <div className="column-two">
            <p>
              Made with love by us :) <br />
              <br />
              Contact Us
              <br />
              <a
                href="mailto:africanfeministsociety@gmail.com"
                onClick={() => {}}>
                africanfeministsociety@gmail.com
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
