import React from "react";

import Bg from "../assets/images/bg.jpg";
import Conhecimentos from '../assets/images/conhecimentos.png'
import IconFigma from '../assets/icons/Figma.png'

import "./home.css";

const Home = () => {
  return (
    <div className="container">
      <header id="home">
        <div className="img-wrapper">
          <img src={Bg} alt="Banner do projeto Portfólio" />
        </div>
        <div className="banner">
          <h1>Desenvolvedor Júnior</h1>
          <p>Carlos Lima</p>
          <a href="#projetos"><button class="btn">Saiba mais</button></a>
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

      <section className="sessao-conhecimentos" id="conhecimentos">
        <div className="sessao-header">
          <h1>Conhecimentos</h1>
        </div>

        <div className="conhecimentos">
          
          <div className="conhecimento">
          <div className="conhecimento-header">
              <img src="https://img.icons8.com/color/48/000000/html-5.png"/>
              <img src="https://img.icons8.com/color/48/000000/css3.png"/>
              <h3>HTML + CSS</h3>
            </div>
            <div className="conhecimento-text">
              <p>HTML (HiperText Markup Language) é o código utilizado para fazer um website. CSS (Cascading Style Sheets) por sua vez, é o código utilizado para deixar o seu website bonito.</p>
            </div>
          </div>

          <div className="conhecimento">
            <div className="conhecimento-header">
              <img src="https://img.icons8.com/color/48/000000/javascript.png"/>
              <h3>JavaScript</h3>
            </div>
            <div className="conhecimento-text">
              <p>JavaScript é uma linguagem de programação interpretada estruturada, de script em alto nível com tipagem dinâmica fraca e multiparadigma.</p>
            </div>
          </div>

          <div className="conhecimento">
            <div className="conhecimento-header">
            <img src="https://img.icons8.com/color/48/000000/typescript.png"/>
              <h3>Typescript</h3>
            </div>
            <div className="conhecimento-text">
              <p>TypeScript é um superconjunto de JavaScript desenvolvido pela Microsoft que adiciona tipagem e alguns outros recursos a linguagem.</p>
            </div>
          </div>

          <div className="conhecimento">
            <div className="conhecimento-header">
            <img src="https://img.icons8.com/color/48/000000/react-native.png"/>
              <h3>ReactJS</h3>
            </div>
            <div className="conhecimento-text">
              <p>O React é uma biblioteca JavaScript de código aberto com foco em criar interfaces de usuário em páginas web.</p>
            </div>
          </div>

          <div className="conhecimento">
            <div className="conhecimento-header">
              <img src="https://img.icons8.com/color/48/000000/nodejs.png"/>
              <h3>Node.JS</h3>
            </div>
            <div className="conhecimento-text">
              <p>Node.js trata-se de um software open-source, cross-platform, e de um runtime de JavaScript que execute código de JavaScript a nível backend e frontend.</p>
            </div>
          </div>

          <div className="conhecimento">
            <div className="conhecimento-header">
              <img width="60" height="60" src={IconFigma}/>
              <h3>Figma</h3>
            </div>
            <div className="conhecimento-text">
              <p>Figma é um editor gráfico de vetor e prototipagem de projetos de design baseado principalmente no navegador web, com ferramentas offline adicionais para aplicações desktop.</p>
            </div>
          </div>

          <div className="conhecimentos-img-wrapper">
            <img src={Conhecimentos} alt="imagem conhecimento" />
          </div>

        </div>
      </section>

      
    </div>
  );
};

export default Home;
