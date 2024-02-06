import { NavLink } from "react-router-dom";

export default function MainComponent() {
  const now = new Date();
  const hours = now.getHours().toString().padStart(2, "0"); // Obtém as horas, com zero à esquerda se necessário
  const minutes = now.getMinutes().toString().padStart(2, "0"); // Obtém os minutos, com zero à esquerda se necessário

  const currentTimeString = `${hours}:${minutes}`; // Formata a hora atual como uma string "HH:MM:SS"

  const currentTimeElement = document.getElementById("currentTime");
  if (currentTimeElement) {
    currentTimeElement.textContent = currentTimeString; // Atualiza o conteúdo do elemento HTML com a hora atual
  }

  // Chama a função para exibir a hora atual a cada segundo
  setInterval(MainComponent, 1000);

  return (
    <>
      <div id="windowsXP">
        <div className="areaTrabalho">
          <div id="lixeira" className="desktopIcon">
            <img src="https://www.clipartmax.com/png/full/92-925325_modernxp-76-trash-full-icon-windows-xp-recycle-bin-icon-png.png" />
            <span>Lixeira</span>
          </div>
          <div id="ie" className="desktopIcon">
            <NavLink to="/google">
              <img src="https://www.shareicon.net/data/128x128/2016/09/23/833703_browser_512x512.png" />
              <span>Chrome</span>
            </NavLink>
          </div>
        </div>

        <div className="janela" data-status="restaurado">
          <div className="topBar">
            <div className="titleBar">
              <img
                width="20"
                src="https://www.clipartmax.com/png/full/92-925325_modernxp-76-trash-full-icon-windows-xp-recycle-bin-icon-png.png"
              />
              <h2> Lixeira </h2>
            </div>
          </div>

          <div className="janelaBody">
            <div id="segredo" className="iconLixo">
              <img src="https://icons.iconarchive.com/icons/hopstarter/software/256/Windows-Media-Player-icon.png" />
              <span>segredo.mp4</span>
            </div>
          </div>
        </div>

        <div className="barra-de-tarefas">
          <div id="iniciar" >
            <img className="logoIniciar"
              width="30"
              src="https://icons.iconarchive.com/icons/tatice/operating-systems/128/Windows-icon.png"
            />
            &nbsp; Iniciar
          </div>
          <div className="programas-abertos">
            <div className="prog">
              <img src="https://cdn.pixabay.com/photo/2015/03/21/06/27/recycle-bin-683244_1280.png" />
              <span>Lixeira</span>
            </div>
          </div>
          <div className="area-de-notificacao">
            <div className="icon" id="volume"></div>
            <div className="icon" id="media"></div>
            <div className="icon" id="seguranca"></div>
            <div className="clock" id="currentTime"></div>
          </div>
        </div>
        {/*    <div className="barraTarefas">
          <button id="iniciar">
            <img
              width="30"
              src="https://icons.iconarchive.com/icons/tatice/operating-systems/128/Windows-icon.png"
            />
            &nbsp; Iniciar
          </button>
          <div className="programasAbertos">
            <div className="prog">
              <img src="https://cdn.pixabay.com/photo/2015/03/21/06/27/recycle-bin-683244_1280.png" />
              <span>Lixeira</span>
            </div>
          </div>
          <div className="areaNotificacao">
            <div className="icon" id="volume"></div>
            <div className="icon" id="media"></div>
            <div className="icon" id="seguranca"></div>
            <div className="taskbar__clock" id="currentTime"></div>
          </div>
        </div> */}
      </div>
    </>
  );
}
