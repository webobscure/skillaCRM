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
            <li className="horizontal-list__item">
                <p>Среда, 13 окт</p>
            </li>
            <li className="horizontal-list__item">Новые звонки</li>
            <li className="horizontal-list__item">Качество разговоров</li>
            <li className="horizontal-list__item">Конверсия в заказе</li>
            <li className="horizontal-list__item">
                <input type="text" />
            </li>
            <li className="horizontal-list__item">
                <img src={search} alt="" />
            </li>
            <li className="horizontal-list__item">
                <p>ИП Сидорова Александра Михайловна</p>
            </li>
            <li className="horizontal-list__item">
                <img src={fake} alt="" />
            </li>
        </ul>
      </nav>
    </>
  );
};

export default Header;
