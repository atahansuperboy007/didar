import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import { useState } from "react";
import Movelist from "./Movelist";
import "./style.css";
import Good from "./good";
import Movie from "./Movie";
import Search from "./comp/Search";
import Form from "./comp/Form";
import Popul from "./comp/Popul";
import Best from "./comp/Best";
import Ikol from "./comp/Ikol";
import Mult from "./comp/Mult"
import Hgh from "./comp/Hgh";
import Jk from "./comp/Jk"
import Lk from "./comp/Lk"
import Vs from "./comp/Vs"
import Mu from "./comp/Mu"
import Try from "./comp/Try";
import Kom from "./comp/Kom";
import Pric from "./comp/Pric";
import MyClock from "./comp/CountDown";
function App() {
  return (
  <div className="main">
      <div className="kat">
      <div className="kik">
        <button><a href="/Login"><h2>Войти</h2></a></button>
      </div>
      <div className="katalog">
        <h3>Жанры</h3>
        <hr />
        <a href="/pl">
          <p>Драма</p>
        </a>
        <a href="/p"><p>Боевик</p></a>
        <a href="/pp"><p>Мультфильм</p></a>
        <a href="/po"><p>Мелодрама</p></a>
        <a href="/sem"><p>Семейный</p></a>
        <a href="/s2"><p>Триллер</p></a>
        <a href="/s3"><p>Комедия</p> </a>
        <a href="/s4"><p>Приключения</p> </a>

      </div>
      <div className="Podpis">
        <a href="/VS">Всегда в плюсе</a>
      </div>
      </div>
      
      <div className="container">
        <BrowserRouter>
        <header>
            <Link to="/S" className="lol">
            <div className="lp"><img src="https://image.flaticon.com/icons/png/512/1179/1179069.png" alt="" /> <h2>SmotryKino.poisk</h2></div>
            </Link>
            <div className="links">
              <Link to="/hello">Скоро выйдут</Link>
              <Link to="/">Фильмы в кино</Link>
              <Link to="/popul">Популярные Фильмы</Link>
            </div>
            <div className="search">
              <Form />
            </div>
          </header>
          <Switch>
            <Route path="/hello">
              <Good />
            </Route>
            <Route exact path="/">
              <Movelist />
            </Route>
            <Route path="/movie/:id">
              <Movie />
            </Route>
            <Route path="/search/:q">
              <Search />
            </Route>
            <Route path="/popul">
              <Popul />
            </Route>
            <Route path="/S">
              <Best/>
            </Route>
            <Route path="/Login">
              <Ikol/>
            </Route>
            <Route path="/pl">
              <Mult/>
            </Route>
            <Route path="/p">
              <Hgh/>
            </Route>
            <Route path="/pp">
              <Jk/>
            </Route>
            <Route path="/po">
              <Lk/>
            </Route>
            <Route path="/VS">
              <Vs/>
            </Route>
            <Route path="/sem">
              <Mu/>
            </Route>
            <Route path="/s2">
              <Try/>
            </Route>
            <Route path="/s3">
              <Kom/>
            </Route>
            <Route path="/s4">
              <Pric/>
            </Route>
            <Route path="/s5">
              <MyClock/>
            </Route>
          </Switch>
          <footer>
          <div className="lll">
          <p> Created by Kanalbay Didar - </p>
            <img
              src="https://image.flaticon.com/icons/png/512/145/145813.png"
              alt=""
            />
            <img
              src="https://image.flaticon.com/icons/png/512/145/145802.png"
              alt=""
            />{" "}
            <img
              src="https://image.flaticon.com/icons/png/512/2111/2111463.png"
              alt=""
            />
            </div>
          </footer>
        </BrowserRouter>
      </div>
      </div>
  );
}

export default App;
