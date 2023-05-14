import "./styles.css";

const Home = () => {
  const since = new Date("2023-05-09");
  const to = new Date();

  const days = (d1, d2) => {
    let dif = d1.getTime() - d2.getTime();
    let total = Math.ceil(dif / (1000 * 3600 * 24));
    return total;
  };

  return (
    <main id="home-main">
      <div id="home-content" className="welcome-section">
        <div className="alert alert-secondary alert-dismissible fade show" role="alert">
          <strong>Atenção:</strong> Este website está em fase de construção há <strong>{days(to, since)} dia(s)</strong> e o conteúdo e layout podem
          sofrer alterações consideráveis.
          <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>
        <h2>OEC</h2>
        <div className="home-subtitle">
          <span>Organização da</span>
          <span>Economia Criativa</span>
        </div>
      </div>
      <div className="second-section">
        <div className="info-card">
          <h6>Header 1</h6>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt, at ipsa enim a repellendus hic omnis velit illum non, tenetur,
            eligendi voluptatibus maiores autem facere! Similique dolorem quod natus? Nemo aliquam accusantium laboriosam deserunt, mollitia ab
            repudiandae quam praesentium! Fuga totam ut, labore sequi perspiciatis earum cum doloribus dolorem porro blanditiis, magnam eaque enim
            nemo libero?
          </p>
        </div>
        <div className="info-card">
          <h6>Header 2</h6>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod quo possimus pariatur obcaecati, quibusdam labore. Illum odit
            exercitationem repudiandae consequuntur architecto beatae, nemo tempore deleniti, eaque, porro quod voluptas! Veniam, rerum. Est vitae
            fuga ea dicta laboriosam! Deleniti eos facere in blanditiis ratione nobis ad.
          </p>
        </div>
        <div className="info-card">
          <h6>Header 3</h6>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque eaque sapiente natus neque, cum harum. Architecto veniam cupiditate
            exercitationem non obcaecati iure est ipsa commodi deleniti eum voluptas, qui quam ex explicabo at. Earum, nisi unde ad odit maxime,
            accusantium animi vitae ullam deleniti recusandae temporibus ratione optio a?
          </p>
        </div>
      </div>
    </main>
  );
};

export default Home;
