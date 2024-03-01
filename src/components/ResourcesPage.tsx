const ResourcesPage = () => {
  return (
    <>
      <div className="page-container">
        <div className="resources page-header">
          <div id="resources-page" className="wrap">
            <div className="intro">
              <h2>Resources</h2>
              <p>Papers, books and webpages worth a read!</p>
            </div>
            <div id="resource-folder">
              <h3>Documents</h3>
              <iframe
                className="drive-embed grid"
                src="https://drive.google.com/embeddedfolderview?id=1yU_Rcj_IBI-GAhuRUKusbKeumfMSGCLy#grid"></iframe>
            </div>
            <div id="resource-links">
              <h3>Support</h3>
              <div className="card-container">
                <a href="https://humanities.uct.ac.za/agi">
                  <div className="card">
                    <img src="agi_logo.png" />
                    <div>
                      <h4>African Gender Institute</h4>
                      <p>
                        AGI is a feminist research institute located within the
                        Department of African Feminist Studies in the Faculty of
                        Humanities at the University of Cape Town (UCT). We are
                        committed to connecting with African womxn who identify
                        as feminist thinkers and activists across disciplinary,
                        institutional and geographic borders.
                      </p>
                    </div>
                  </div>
                </a>
              </div>
            </div>

            <div id="share-resource">
              <img
                className="main-image"
                src="backgroundgraphics/resources.png"
              />
              <p className="addtoshared">
                Have some resources to share?{" "}
                <a
                  target="_blank"
                  rel="nofollow"
                  href="https://drive.google.com/drive/folders/1yU_Rcj_IBI-GAhuRUKusbKeumfMSGCLy">
                  Upload to the shared Resources folder :)
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>

      <a>Creativity illustrations by Storyset</a>
    </>
  );
};

export default ResourcesPage;
