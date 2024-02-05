interface NavProps {
  pages: string[];
  onSelectPage: (page: string) => void;
}

const NavigationBar = ({ pages, onSelectPage }: NavProps) => {
  return (
    <ul className="nav">
      {pages.map((page, index) => (
        <li
          className={"list-group-item index" + index}
          key={"nav-" + page}
          onClick={() => onSelectPage(page)}
        >
          {page}
        </li>
      ))}
    </ul>
  );
};

export default NavigationBar;
