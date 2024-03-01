interface TitleProps {
  onHome: boolean;
}
const Title = ({ onHome }: TitleProps) => {
  return (
    <>
      <div id="title-container">
        <h1 id="title" className={onHome ? "on-home" : ""}>
          African <br className={onHome ? "" : "on-focus"} />
          Feminist
          <br className={onHome ? "" : "on-focus"} /> Society
        </h1>
      </div>
    </>
  );
};

export default Title;
