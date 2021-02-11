import React from "react";

//importações das imagens
import Bg from "../assets/images/bg.jpg";
import Conhecimentos from "../assets/images/conhecimentos.png";
import IconFigma from "../assets/icons/Figma.png";
import ImgTesai from "../assets/images/logo-01 tesai.png";
import ImgCovid from "../assets/images/covid.jpg";
import ImgApi from "../assets/images/api.jpg";
import ImgIngles from "../assets/images/curso-ingles.png";
import ImgEstacionamento from "../assets/images/estacionamento.jpg";

//impoertação do estilo
import "./home.css";

const Home = () => {
  return (
    <div className="container">
      <div class="hamburguer">
        <div class="line" id="line1"></div>
        <div class="line" id="line2"></div>
        <div class="line" id="line3"></div>
        <span>fechar</span>
      </div>

      <header id="home">
        <div className="img-wrapper">
          <img src={Bg} alt="Banner do projeto Portfólio" />
        </div>
        <div className="banner">
          <h1>Desenvolvedor Front-end</h1>
          <p>Carlos Lima</p>
          <a href="#projetos">
            <button class="btn">Saiba mais</button>
          </a>
        </div>
      </header>

      <aside className="sidebar">
        <nav>
          <ul className="menu">
            <li className="menu-item">
              <a href="#" className="menu-link">
                Home
              </a>
            </li>
            <li className="menu-item">
              <a href="#conhecimentos" className="menu-link">
                Conhecimentos
              </a>
            </li>
            <li className="menu-item">
              <a href="#projetos" className="menu-link">
                Projetos
              </a>
            </li>
            <li className="menu-item">
              <a href="#contato" className="menu-link">
                Contato
              </a>
            </li>
          </ul>
        </nav>
        <div className="social-media">
          <a
            href="https://www.linkedin.com/in/carlos-henrique-lima-60a7ba1a3/"
            target="_Blank"
          >
            <i className="fab fa-linkedin-in"></i>
          </a>
          <a href="https://github.com/carlos334lima" target="_Blank">
            <i className="fab fa-github"></i>
          </a>
          <a href="https://medium.com/@carloslima334" target="_Blank">
            <i className="fab fa-medium"></i>
          </a>
        </div>
      </aside>

      {/* Sessão conhecimentos */}

      <section className="sessao-conhecimentos" id="conhecimentos">
        <div className="sessao-header">
          <h1>Conhecimentos</h1>
        </div>

        <div className="conhecimentos">
          {/* conhecimento */}

          <div className="conhecimento">
            <div className="conhecimento-header">
              <img src="https://img.icons8.com/color/48/000000/html-5.png" />
              <img src="https://img.icons8.com/color/48/000000/css3.png" />
              <h3>HTML + CSS</h3>
            </div>
            <div className="conhecimento-text">
              <p>
                HTML (HiperText Markup Language) é o código utilizado para fazer
                um website. CSS (Cascading Style Sheets) por sua vez, é o código
                utilizado para deixar o seu website bonito.
              </p>
            </div>
          </div>

          {/* ------------------------------------------------------ */}

          <div className="conhecimento">
            <div className="conhecimento-header">
              <img src="https://img.icons8.com/color/48/000000/javascript.png" />
              <h3>JavaScript</h3>
            </div>
            <div className="conhecimento-text">
              <p>
                JavaScript é uma linguagem de programação interpretada
                estruturada, de script em alto nível com tipagem dinâmica fraca
                e multiparadigma.
              </p>
            </div>
          </div>

          {/* ------------------------------------------------------ */}

          <div className="conhecimento">
            <div className="conhecimento-header">
              <img src="https://img.icons8.com/color/48/000000/typescript.png" />
              <h3>Typescript</h3>
            </div>
            <div className="conhecimento-text">
              <p>
                TypeScript é um superconjunto de JavaScript desenvolvido pela
                Microsoft que adiciona tipagem e alguns outros recursos a
                linguagem.
              </p>
            </div>
          </div>

          {/* ------------------------------------------------------ */}

          <div className="conhecimento">
            <div className="conhecimento-header">
              <img src="https://img.icons8.com/color/48/000000/react-native.png" />
              <h3>ReactJS</h3>
            </div>
            <div className="conhecimento-text">
              <p>
                O React é uma biblioteca JavaScript de código aberto com foco em
                criar interfaces de usuário em páginas web.
              </p>
            </div>
          </div>

          {/* ------------------------------------------------------ */}

          <div className="conhecimento">
            <div className="conhecimento-header">
              <img src="https://img.icons8.com/color/48/000000/nodejs.png" />
              <h3>Node.JS</h3>
            </div>
            <div className="conhecimento-text">
              <p>
                Node.js trata-se de um software open-source, cross-platform, e
                de um runtime de JavaScript que execute código de JavaScript a
                nível backend e frontend.
              </p>
            </div>
          </div>

          {/* ------------------------------------------------------ */}

          <div className="conhecimento">
            <div className="conhecimento-header">
              <img width="60" height="60" src={IconFigma} />
              <h3>Figma</h3>
            </div>
            <div className="conhecimento-text">
              <p>
                Figma é um editor gráfico de vetor e prototipagem de projetos de
                design baseado principalmente no navegador web, com ferramentas
                offline adicionais para aplicações desktop.
              </p>
            </div>
          </div>

          {/* ------------------------------------------------------ */}

          <div className="conhecimentos-img-wrapper">
            <img src={Conhecimentos} alt="imagem conhecimento" />
          </div>
        </div>
      </section>

      {/* Sessão de projetos */}

      <div className="sessao-projetos" id="projetos">
        <div className="sessao-header">
          <h1>Projetos</h1>
        </div>

        <div className="projetos">
          {/* Cards de projetos */}

          <div className="card">
            <div className="card-img-wrapper">
              <img src={ImgTesai} alt="imagem do projeto TESAI" />
            </div>
            <div className="card-info">
              <h2>Tesai</h2>
              <h3>React | Redux | Redux Saga | API</h3>
              <p>
                Nesse projeto, desenvolvo uma aplicação que marca consultas com
                Especialistas da área da saúde. Essa aplicação foi desenvolvida
                para um teste de estágio Front-end.
              </p>
              <a
                href="https://github.com/carlos334lima/project-tesai"
                target="_Blank"
              >
                <button className="btn">Saiba Mais</button>
              </a>
            </div>
          </div>

          {/* ---------------------------------------------------- */}

          <div className="card">
            <div className="card-img-wrapper">
              <img src={ImgCovid} alt="imagem do projeto COVID-19" />
            </div>
            <div className="card-info">
              <h2>Mapa Covid-19</h2>
              <h3>React | Material UI | API</h3>
              <p>
                Desenvolvendo uma Progressive Web Application para mapear os
                dados do COVID-19 pelo mundo.
              </p>
              <a
                href="https://github.com/carlos334lima/covid19"
                target="_Blank"
              >
                <button className="btn">Saiba Mais</button>
              </a>
            </div>
          </div>

          {/* ---------------------------------------------------- */}
          <div class="card">
            <div class="card-img-wrapper">
              <img src={ImgApi} alt="imagem do API" />
            </div>
            <div class="card-info">
              <h2>API</h2>
              <h3>Node.Js</h3>
              <p>Criando uma API e consumindo no Backend e no Front-end.</p>
              <a
                href="https://github.com/carlos334lima/Consumindo-API"
                target="_Blank"
              >
                <button class="btn">Saiba Mais</button>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* ---------------------------------------------------- */}

      <div class="projetos">
        <div className="card">
          <div className="card-img-wrapper">
            <img src={ImgIngles} alt="imagem do projeto CURSO DE INGLES" />
          </div>
          <div className="card-info">
            <h2>Curso de Inglês</h2>
            <h3>HTML5 | CSS3 | JavaScript</h3>
            <p>
              Um mini-curso de inglês, que propõe o aprendizado as cores em
              ingês com um sistema de reconhecimento de voz. Tornando a
              aplicação mais legal e interativa.
            </p>
            <a
              href="https://carlos334lima.github.io/Aprendendo-ingles/"
              target="_Blank"
            >
              <button className="btn">Saiba Mais</button>
            </a>
          </div>
        </div>

        <div className="card">
          <div className="card-img-wrapper">
            <img
              src={ImgEstacionamento}
              alt="imagem do projeto ESTACIONAMENTO"
            />
          </div>
          <div className="card-info">
            <h2>Estacionamento</h2>
            <h3>HTML5 | JavaScript | Bootstrap</h3>
            <p>
              Nesse projeto trago um simples software de gestão para
              estacionamentos, ao qual pode trazer como benefícios a empresa: um
              maior controle e uma melhor gestão do ambiente.
            </p>
            <a
              href="https://carlos334lima.github.io/Sistema-Estacionamento/"
              target="_Blank"
            >
              <button className="btn">Saiba Mais</button>
            </a>
          </div>
        </div>

        <div className="card">
          <div className="card-img-wrapper">
            <img src="./imagens/netflix2.jpg" alt="imagem do projeto NETFLIX" />
          </div>
          <div className="card-info">
            <h2>Netflix</h2>
            <h3>HTML5 | CSS3 | JavaScript</h3>
            <p>
              Nesse projeto trago a proposta de recriação da interface principal
              da provedora global de filmes e séries de televisão via streaming:
              Netflix
            </p>
            <a href="https://carlos334lima.github.io/Netflix/" target="_Blank">
              <button className="btn">Saiba Mais</button>
            </a>
          </div>
        </div>
      </div>

      <footer>
        <div class="footer-content">
          <p>By Carlos Lima - 2020</p>
          <div class="social-list">
            <a
              href="https://www.linkedin.com/in/carlos-henrique-lima-60a7ba1a3/"
              target="_Blank"
            >
              <img src="https://img.icons8.com/android/24/000000/linkedin.png" />
            </a>
            <a href="https://github.com/carlos334lima" target="_Blank">
              <img src="https://img.icons8.com/metro/26/000000/github.png"></img>
            </a>
            <a
              href="https://mail.google.com/mail/u/0/?tab=wm&ogbl#inbox?compose=GTvVlcRzBxxsVgBtzGDrQDmMqDDnSBvxZbrjxgqBPJGBdvgSnGmNJpFrnrrDNDVtzZDSJDVmWmQzh"
              target="_Blank"
            >
              <img src="https://img.icons8.com/material-two-tone/24/000000/email.png" />
            </a>
            <a href="https://medium.com/@carloslima334" target="_Blank">
              <img
                src="https://img.icons8.com/ios-filled/50/000000/medium-logo.png"
                width="30px"
                height="25px"
              />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
