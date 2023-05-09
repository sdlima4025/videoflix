import Player from "../Player";
import "./Banner.css";
function Banner() {
  return (
    <>
      <div className="banner">
        <button className="banner-titulo">Front End</button>
        <h2 className="sub-titulo">SEO com React</h2>
        <p className="banner-paragrafo">
          Esse desafio é uma forma de aprendizado. É um mecanismo onde você pode
          se engajar na resolução de um problema para poder aplicar todo o
          conhecimento adquirido na Formação React.
        </p>
        <img
          className="banner-img1"
          src="/imagens/BannerBackground.png"
          alt="Banner da coffeflix"
        />
        <Player />
      </div>
    </>
  );
}
export default Banner;
