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
        {pages[i]}
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
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              molestie nisl eu massa gravida facilisis. Sed in pretium ante.
              Donec id massa aliquet, porta arcu ut, tincidunt enim.
              <br />
              <br />
              Contact Us
              <br />
              +27(0) 21 566 292nnaaaah
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
