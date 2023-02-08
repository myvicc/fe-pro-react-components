import React from 'react';

const navItemsList = [
  {
    hrefNavList: "/",
    internal: "Home"
  },
  {
    hrefNavList: "/#about",
    internal: "About us",
  },
  {
    hrefNavList: "/#contact",
    internal: "Contact us",
  },
  {
    hrefNavList: "#/help",
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

const Header = (logoHeader) => {
  return (
      <header className="header">
        <div className="container">
          <a href="" className="logo">
            {logoHeader}
          </a>

          <nav>
            <ul className="nav-list">
              <NavItem />
            </ul>
          </nav>
        </div>
      </header>
  )
}

const NavItem = ({ hrefNavList, internal }) => {
  return (
      navItemsList.map(() => {
        return (
            <li key={hrefNavList} className="nav-list__item">
              <a href={hrefNavList}>
                {internal}
              </a>
            </li>
        )
      })
  )
}

function Main () {
  return (
      <main>
        <section className="posts">
          <div className="container">
            <h1>
              Posts
            </h1>
            <ul className="list">
              <Article />
            </ul>
          </div>
        </section>
      </main>
  )
}

function Article ({headerListItem, textListItem }) {
  return mainItemsList.map(() => {
    return (
        <li key={headerListItem} className="list__item">
          <h2>{headerListItem}</h2>
          <p>{textListItem}</p>
        </li>
    )
  })
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
        <Header logoHeader="My logo"/>
        <Main />
        <Footer logo="Logo" text="Small static blog @ 2022"/>
      </div>
  )
};


export default Application;

