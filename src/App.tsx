import "./App.css";
import profilePicture from "./img/profilePicture.png";
import modelCar from "./img/modelCar.png";
import avaliacaoMotorista from "./img/avaliacaoMotorista.png";
import phone from "./img/phone.svg";
import marker from "./img/marker.svg";
import client from "./img/client.png";
import deleteIcon from "./img/deleteIcon.svg";

function App() {
  return (
    <div id="bordaExterna">
      <div id="botaoSuperior"></div>
      <div id="informacoes">
        <p className="orientacao">Encontre <span className="nomeReferencia">Fábio</span> no local de partida</p>
        <p className="tempo">Chega em 3 minutos (800 metros)</p>

        <div id="motorista">
          <img className="modelCar" src={modelCar} alt="Representação do carro"/>
          <div id="perfil">
            <img className="profilePicture" src={profilePicture} alt="Foto do motorista"/>
            <img className="avaliacaoMotorista" src={avaliacaoMotorista} alt="Avaliação do motorista"/>
          </div>
          <div id="infoCar">
            <p className="placa">BCD0D19</p>
            <p className="carro">Honda Civic Roxo</p>
          </div>
          <div id="message">
            <input className="sendMessage" type="text" placeholder="Enviar mensagem para Fábio..."/>
            <button>Publicar</button>
            <img src={phone} alt="Telefone"/>
            <img src={marker} alt="Marcar"/>
          </div>
          <div id="conversa">
            <div className="cliente">
              <img src={client} alt="Cliente"/>
              <p>Boris estou no local já lhe esperando. estou com camisa azul e calça jeans</p>
              <button><img src={deleteIcon} alt="Excluir"/></button>
            </div>
            <div className="motorista">
              <img src={profilePicture} alt="Cliente"/>
              <p>Acabei de lhe ver. Vou estacionar o carro próximo.</p>
              <button><img src={deleteIcon} alt="Excluir"/></button>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default App;
