const ArchivePage = () => {
  return (
    <div id="archive-page" className="page-container">
      <div className="intro">
        <img src="/backgroundgraphics/archiveback1.png" className="centre" />
        <div>
          <h2>
            Our
            <br /> Archive
          </h2>
          <p className="hidden">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta
            debitis itaque, eligendi veritatis nihil animi autem dolorum
            laboriosam illum aperiam id quisquam repellat magni, voluptas cumque
            expedita laborum quam nobis ipsa non ut. Quasi accusamus ipsum
            blanditiis, deleniti consequatur eum!
          </p>
        </div>
      </div>
      <div className="folder">
        <div className="descript">
          <h3>{"Our Charter"}</h3>
          <p>
            This charter documents our vision for the society. It includes our
            guiding principles and what we hope for the society going forward.
          </p>
        </div>
        <iframe src="https://docs.google.com/document/d/e/2PACX-1vTPGgxHrTOKFArbYA_h-EeBQNFxCa-QXv7rkNcgK9YfTzJJyVGoz3i_l3_ECm9ZA_1IPiPQMHZOaqTr/pub?embedded=true"></iframe>
      </div>
    </div>
  );
};

export default ArchivePage;
