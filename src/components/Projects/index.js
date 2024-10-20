import { useState } from "react";
import style from "./Projects.module.css";
import veiculos from "./veiculos.png";
import biblia from "./biblia.png";
import colecao from "./colecao.png";
import ebooks from "./ebooks.png";
import jogo from "./jogo.png";
import livros from "./livros.png";
import pkpratas from "./pkpratas.jpeg";
import tabuada from "./tabuada.png";

function Projects() {
  const [mostrandoTodos, setMostrandoTodos] = useState(false);

  const projetos = [
    {
      img: veiculos,
      title: "Veículos",
      link: "https://github.com/eduardoaugustopp/HtmlCssJavaScript-projeto-veiculos",
      description: "HTML, CSS e JavaScript",
    },
    {
      img: biblia,
      title: "Bíblia",
      link: "https://github.com/eduardoaugustopp/JavaScript-exercicio1-biblia",
      description: "HTML, CSS e JavaScript",
    },
    {
      img: ebooks,
      title: "Ebooks",
      link: "https://github.com/eduardoaugustopp/ReactNodeAPI-exercicio1-books",
      description: "React e Node.js",
    },
    {
      img: pkpratas,
      title: "PKPratas",
      link: "https://github.com/eduardoaugustopp/PKPratas",
      description: "React, CSS e JavaScript",
    },
    {
      img: tabuada,
      title: "Tabuada por Voz",
      link: "https://github.com/eduardoaugustopp/JavaScript-exercicio2-tabuada",
      description: "HTML, CSS e JavaScript",
    },
    {
      img: colecao,
      title: "Coleção",
      link: "https://github.com/eduardoaugustopp/PythonDjango-exercicio1-veiculos",
      description: "Python e Django",
    },
    {
      img: livros,
      title: "Livros",
      link: "https://github.com/eduardoaugustopp/PythonFlaskMySQL-exercicio1-livros",
      description: "Python e Flask",
    },
    {
      img: jogo,
      title: "Jogo 2D",
      link: "https://github.com/eduardoaugustopp/UnityCsharp-exercicio1-jogo",
      description: "C#",
    },
  ];

  const mostrarMaisProjetos = () => {
    setMostrandoTodos(true);
  };

  return (
    <section className={style.projetos} id="projetos">
      <h2 className={style.titulo}>Meus repositórios de projetos pessoais</h2>

      <div className={style.containerProjetos}>
        {projetos.map((projeto, index) => {
          const deveExibir = mostrandoTodos || index < 4;
          return (
            <div
              key={index}
              className={`${style.projeto} ${deveExibir ? style.ativo : ""}`}
            >
              <a href={projeto.link} target="_blank" rel="noopener noreferrer">
                <img src={projeto.img} alt={projeto.title} />
                <h3>{projeto.title}</h3>
                <div className={style.informacoesProjeto}>
                  <p>{projeto.description}</p>
                  <p>🔗 Ver no GitHub Pages</p>
                </div>
              </a>
            </div>
          );
        })}
      </div>

      {!mostrandoTodos && (
        <button
          className={style.btnMostrarProjetos}
          onClick={mostrarMaisProjetos}
        >
          Mostrar mais
        </button>
      )}
    </section>
  );
}

export default Projects;
