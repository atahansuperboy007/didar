function Best() {
  return (
    <div className="glav">
      <div className="lk">
        <h1>О нас</h1>
        <p>
          <span>SmotryKino.poisk</span> - это киносайт , который поможет вам
          насладиться  просмотром кино. <br /> сайт <span>SmotryKino.poisk</span> отличается от других киносайтов, своей простотой.
          <ul>
            <p>1.Сайт не имеет большой обьём информации. <br />
            2.За несколько секунд можно найти любой фильм. <br />
            3.Наш сайт в отличий от других киносайтов загружается быстро.</p>
          </ul>
        </p>
        <p>
          Подпишись на нас в социальных сетях : <br />{" "}
          <a href="">
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
          </a>
          <div className="ds">
            {" "}
            - И получи бесплатный подписку :{" "}
            <div className="dp">Всегда в плюсе.</div>{" "}
          </div>
        </p>
      </div>
      <div className="zak">
        <h1>Всегда есть что посмотреть</h1>
        <p>
          Новые серии в день выхода и тысячи фильмов на вечер. <br /> Без
          рекламы, в хорошем качестве, с любимой озвучкой <br /> или в
          оригинале.
        </p>
        <button>
          <a href="/VS" class="but">
            Попробовать первый месяц бесплатно
          </a>
        </button>
      </div>
      <div className="zak">
        <h1>Смотрите кино дома и в дороге</h1>
        <p>
          Начните на телевизоре и продолжите с того же места <br /> на смартфоне
          или планшете.
        </p>
        <div className="zik">
          <div className="zikp">
            <img
              src="https://yastatic.net/s3/ott-static/hd/production/_/v1/devices-tv-league.b266e1b7b27502ab784100fe04c4463e.png"
              alt=""
            />
          </div>
          <div className="zika">
            <h1>На телевизоре</h1>
            <div className="zx">
            <div className="ziko">
              <img src="https://image.flaticon.com/icons/png/512/882/882747.png" alt="" />
              <img src="https://image.flaticon.com/icons/png/512/588/588296.png" alt="" />
              <img src="https://image.flaticon.com/icons/png/512/882/882722.png" alt="" />
            </div>
            <div className="ziko">
              <img src="https://image.flaticon.com/icons/png/512/882/882749.png" alt="" />
              <img src="https://image.flaticon.com/icons/png/512/732/732225.png" alt="" />
              <img src="https://image.flaticon.com/icons/png/512/882/882720.png" alt="" />
            </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Best;
