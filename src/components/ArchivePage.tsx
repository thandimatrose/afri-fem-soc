const ArchivePage = () => {
  return (
    <div id="archive-page" className="page-container">
      <div className="intro">
        <img
          src="src/assets/backgroundgraphics/archiveback1.png"
          className="centre"
        />
        <div>
          <h2> Our Archive</h2>
          <p>
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
          <h3>Our Charter</h3>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Repudiandae ipsam omnis adipisci quas molestias a ipsa rem explicabo
            laboriosam aliquam pariatur, aspernatur iusto dolorem, qui ut
            aperiam, voluptas porro nemo.
          </p>
        </div>
        <iframe
          src="https://docs.google.com/viewer?srcid=1wy7otnRhgDtUjmX2nUeU3s1gFiLCfoshOPiTnIl6law&pid=explorer&efh=false&a=v&chrome=false&embedded=true"
          width="580px"
          height="480px"></iframe>
      </div>
      <div className="folder">
        <h3>Our Presentations</h3>
        <iframe
          className="drive-embed"
          src="https://drive.google.com/embeddedfolderview?id=1TnmdF7qJxBOGGdaI_gvAGdr_up2ZJf0K#grid"></iframe>
      </div>
    </div>
  );
};

export default ArchivePage;
