import { useEffect } from 'react';

import fetchList from '../utils/fetchList'
import { arrow, progress, search, woman } from '../assets';

const Home = (id) => {
  useEffect(() => {
    fetchList()
   }, [id]);

  return (
    <>
      <div className="container">
        <section className="table-section">
          <div className="controls">
            <div className="controls-left">
              <img src={search} alt="search" className="controls-icon" />
              <input type="text" placeholder="Поисп по звонкам" className="controls-input" />
            </div>
            <div className="controls-right">
              <button className="controls-button">
                Все типы
                <img src={arrow} alt="arrow" className="controls-arrow" />
              </button>
              <button className="controls-button">
                Все сотрудники
                <img src={arrow} alt="arrow" className="controls-arrow" />
              </button>
              <button className="controls-button">
                Все звонки
                <img src={arrow} alt="arrow" className="controls-arrow" />
              </button>
              <button className="controls-button">
                Все источники
                <img src={arrow} alt="arrow" className="controls-arrow" />
              </button>
              <button className="controls-button">
                Все оценки
                <img src={arrow} alt="arrow" className="controls-arrow" />
              </button>
              <button className="controls-button" style={{ marginRight: '0px' }}>
                Все ошибки
                <img src={arrow} alt="arrow" className="controls-arrow" />
              </button>
            </div>
          </div>
          <table className="table-container">
            <thead id="thead">
              <tr>
                <th className="">
                  <a>Тип</a>
                </th>
                <th className="time">
                  <a>Время</a>
                </th>
                <th className="worker">
                  <a>Сотрудник</a>
                </th>
                <th className="phone">
                  <a>Звонок</a>
                </th>
                <th className="source">
                  <a>Источник</a>
                </th>
                <th className="rate">
                  <a>Оценка</a>
                </th>
                <th className="distance">
                  <a>Длительность</a>
                </th>
              </tr>
            </thead>
            <tbody id="tbody">
              <tr>
                <td className="type" data-th="Тип">
                  <img src={progress} alt="img" />
                </td>
                <td className="time" data-th="Время">
                  19:00
                </td>
                <td className="worker" data-th="Сотрудник" style={{"paddingLeft": "45px"}}>
                  <img src={woman} alt="ava" />
                </td>
                <td className="phone" data-th="Звонок" style={{"paddingLeft": "80px"}}>
                  +7 (987) 567-17-12
                </td>
                <td className="source" data-th="Источник" style={{"paddingLeft": "115px"}}>
                  Rabota.ru
                </td>
                <td className="rate" data-th="Оценка" style={{"paddingLeft": "132px"}}>
                  Отлично
                </td>
                <td className="distance" data-th="Длительность" style={{"paddingLeft" : "150px"}}>
                  12:06
                </td>
              </tr>
            </tbody>
          </table>
        </section>
      </div>
    </>
  );
};

export default Home;
