import React from 'react';

const navItemsList = [
  {
    navItem: "/",
    internal: "Home"
  },
  {
    navItem: "/#about",
    internal: "About us",
  },
  {
    navItem: "/#contact",
    internal: "Contact us",
  },
  {
    navItem: "#/help",
    internal: "Help page"
  }
];

const mainItemsList = [
  {
    headerListItem: "15 полезных однострочных выражений JavaScript",
    textListItem: "Улучшение JavaScript-кода за пару минут перевод 15 Helpful JavaScript One-Liners"
  },
  {
    headerListItem: "Полиморфизм простыми словами",
    textListItem: "Скорее всего вы уже встречались с понятием “полиморфизм” и даже помните примеры с наследованием, но они показывают далеко не всё"
  },
  {
    headerListItem: "Начало работы с Node.js",
    textListItem: "Node Hero: Глава 1"
  },
  {
    headerListItem: "Нейросети с нуля для JavaScript разработчиков (Часть 1: Перцептрон)",
    textListItem: "Перевод статьи Elyx0: Neural networks from scratch for Javascript linguists (Part1 The Perceptron)."
  },
  {
    headerListItem: "8 практичных хитростей веб-разработчика применить немедленно!",
    textListItem: "HTML, CSS и JS хинты, которые полезно знать перевод 8 Tricks for Web Developers You Can Put Into Practice Immediately"
  },
  {
    headerListItem: "Насколько JavaScript сильный?",
    textListItem: "Погружение в тему неявных преобразований. Где и как возникают и вычисляются неявные преобразования в JavaScript?"
  },
  {
    headerListItem: "Изучите CSS-переменные за 5 минут",
    textListItem: "Перевод статьи Per Harald Borgen: Learn CSS Variables in 5 minutes."
  },
  {
    headerListItem: "Создание MEVN-приложения (Часть 1/2)",
    textListItem: "Создание full-stack приложения на основе Vue.js и Express.js (+MongoDB)"
  },
  {
    headerListItem: "Реактивность Vue.js",
    textListItem: "Реактивность фреймворка Vue.js и использование метода Vue.set"
  },
  {
    headerListItem: "Микроптимизации производительности и JavaScript",
    textListItem: "Недавно в комментариях на Hexlet я поучаствовал в дискуссии на тему «Что важнее — оптимизации производительности или качество кода?» Если…"
  },
  {
    headerListItem: "Девшахта-подкаст",
    textListItem: "#108: Производительность кода — это важнейший критерий качества?"
  },
  {
    headerListItem: "Одна из самых красивых идей в информатике: Y-Combinator",
    textListItem: "Перевод статьи Lucas Fernandes da Costa “Y: The Most Beautiful Idea in Computer Science explained in JavaScript”"
  },
]

const Header = (children) => {
  return (
      <header className="header">
        <div className="container">
          <a href="" className="logo">
            {children}
          </a>
            {navItemsList.map(({ navItem, internal}) => {
                    return <NavItem key={navItem} hrefItem={navItem} children={internal}/>;
                    })}
        </div>
      </header>
  )
}

const NavItem = ({ hrefItem, children}) => {
  return (
      <nav>
        <ul className="nav-list">
            <li className="nav-list__item">
                <a href={hrefItem}>
                    {children}
                </a>
            </li>
        </ul>
      </nav>
  )
}

function Content () {
  return (
      <main>
        <section className="posts">
          <div className="container">
            <h1>
              Posts
            </h1>
            <ul className="list">
                {mainItemsList.map(({headerListItem, textListItem}) => {
                        return <Article key={headerListItem} title={headerListItem} children={textListItem} />;
                    })}
            </ul>
          </div>
        </section>
      </main>
  )
}

function Article ({title, children}) {
  return (
      <li className="list__item">
          <h2>{title}</h2>
          <p>
              {children}
          </p>
      </li>
  )
}

const Footer = ({logo, text}) => {
  return (
      <footer className="footer">
        <div className="container">
          <a href="" className="logo">
            {logo}
          </a>
          <p className="copyright">
            {text}
          </p>
        </div>
      </footer>
  )
};


const Application = () => {
  return (
      <div className="wrapper">
        <Header>My logo</Header>
        <Content />
        <Footer logo="Logo" text="Small static blog @ 2022"/>
      </div>
  )
};


export default Application;

