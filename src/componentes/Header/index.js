import Botao from "../Botao";
import "./Header.css";
function Header() {
  return (
    <>
      <header className="header">
        <img src="/imagens/coffeFlix.png" alt="fundo preto" />
        <Botao>Novo Vídeo</Botao>
      </header>
    </>
  );
}

export default Header;
