import {
  avatar,
  bag,
  book,
  file,
  logo,
  mail,
  orders,
  settings,
  statistic,
  agents,
  phone,
  search,
  fake,
  arrow,
} from '../assets';

const Header = () => {
  return (
    <>
      <nav className="navbar-vertical">
        <div className="logo">
          <img src={logo} alt="logo" className="navbar-logo" />
        </div>
        <ul className="navbar-vertical-list">
          <li className="navbar-vertical-list__item">
            <img src={statistic} alt="" className="navbar-icon" />
            <p>Итоги</p>
          </li>
          <li className="navbar-vertical-list__item">
            <img src={orders} alt="" className="navbar-icon" />
            <p>Заказы</p>
          </li>
          <li className="navbar-vertical-list__item">
            <img src={mail} alt="" className="navbar-icon" />
            <p>Сообщения</p>
          </li>
          <li className="navbar-vertical-list__item">
            <img src={phone} alt="" className="navbar-icon" />
            <p>Звонки</p>
          </li>
          <li className="navbar-vertical-list__item">
            <img src={agents} alt="" className="navbar-icon" />
            <p>Контрагенты</p>
          </li>
          <li className="navbar-vertical-list__item">
            <img src={file} alt="" className="navbar-icon" />
            <p>Документы</p>
          </li>
          <li className="navbar-vertical-list__item">
            <img src={avatar} alt="" className="navbar-icon" />
            <p>Исполнители</p>
          </li>
          <li className="navbar-vertical-list__item">
            <img src={bag} alt="" className="navbar-icon" />
            <p>Отчеты</p>
          </li>
          <li className="navbar-vertical-list__item">
            <img src={book} alt="" className="navbar-icon" />
            <p>База знаний</p>
          </li>
          <li className="navbar-vertical-list__item">
            <img src={settings} alt="" className="navbar-icon" />
            <p>Настройки</p>
          </li>
          <li className="navbar-vertical-list__item">
            <button className="btn btn-blue">Добавить заказ</button>
          </li>
          <li className="navbar-vertical-list__item">
            <button className="btn btn-blue">Оплата</button>
          </li>
        </ul>
      </nav>
      <nav className="navbar-horizontal">
        <ul className="navbar-horizontal-list">
          <li className="navbar-horizontal-list__item">
            <p className="date">Среда, 13 окт</p>
          </li>
          <li className="navbar-horizontal-list__item">
            <h5 className="item-title">Новые звонки</h5>
            <p className="statistic calls">20 из 30 шт</p>
            <div className="box">
              <div className="green-box"></div>
            </div>
          </li>
          <li className="navbar-horizontal-list__item">
            <h5 className="item-title">Качество разговоров</h5>
            <p className="statistic talks">40%</p>
            <div className="box">
              <div className="yellow-box"></div>
            </div>
          </li>
          <li className="navbar-horizontal-list__item">
            <h5 className="item-title">Конверсия в заказе</h5>
            <p className="statistic conversion">67%</p>
            <div className="box">
              <div className="red-box"></div>
            </div>
          </li>
          <li className="navbar-horizontal-list__item">
            <input type="text" style={{ display: 'none' }} />
          </li>
          <li className="navbar-horizontal-list__item">
            <img src={search} alt="" />
          </li>
          <li className="navbar-horizontal-list__item">
            <p className="user">ИП Сидорова Александра Михайловна</p>
            <img src={arrow} alt="arrow" className="arrow-icon" />
          </li>
          <li className="navbar-horizontal-list__item">
            <img src={fake} alt="" />
            <img src={arrow} alt="arrow" className="arrow-icon" />
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Header;
