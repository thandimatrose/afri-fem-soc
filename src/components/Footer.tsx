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
      <div className="column-container">
        <div className="column-one">
          <p></p>
          <ul>{columnOne}</ul>
        </div>
        <div className="column-two">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            molestie nisl eu massa gravida facilisis. Donec vulputate eu tortor
            ut laoreet. Pellentesque tempor justo id mauris congue pretium id ac
            diam. Sed tempor ultrices facilisis. Sed in pretium ante. Donec id
            massa aliquet, porta arcu ut, tincidunt enim.
          </p>
        </div>
      </div>
      <div></div>
    </footer>
  );
};

export default Footer;
