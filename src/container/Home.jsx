//import { useEffect } from 'react';
import { arrow, search } from '../assets';

const Home = () => {
 // useEffect(() => {
 //     const response =  fetch('https://api.skilla.ru/mango/getList?23.12.2020', {
 //       method: 'POST',
 //       headers: { Authorization: 'Bearer testtoken' },
 //     })
 //       .then((res) => res.json())
 //       .then((json) => JSON.stringify(json));
 //     return response;
 // }, []);
 
  return (
    <>
      <div className="container">
        <section className="table-section">
          <div className="controls">
            <div className="controls-left">
              <img src={search} alt="search" className="controls-icon" />
              <input type="text" placeholder="Поисп по звонкам"  className="controls-input"/>
            </div>
            <div className="controls-right">
              <button className="controls-button">Все типы
              <img src={arrow} alt="arrow" className="controls-arrow"/>
              </button>
              <button className="controls-button">Все сотрудники
              <img src={arrow} alt="arrow" className="controls-arrow"/>
              </button>
              <button className="controls-button">Все звонки
              <img src={arrow} alt="arrow" className="controls-arrow"/>
              </button>
              <button className="controls-button">Все источники
              <img src={arrow} alt="arrow" className="controls-arrow"/>
              </button>
              <button className="controls-button">Все оценки
              <img src={arrow} alt="arrow" className="controls-arrow"/>
              </button>
              <button className="controls-button" style={{"marginRight": "0px"}}>Все ошибки
              <img src={arrow} alt="arrow" className="controls-arrow"/>
              </button>
            </div>
          </div>
          <table className="table-container">
            <thead id="thead">
                <row>
                    <th><a >Тип</a></th>
                    <th><a >Время</a></th>
                    <th><a >Сотрудник</a></th>
                    <th><a >Звонок</a></th>
                    <th><a >Источник</a></th>
                    <th><a >Оценка</a></th>
                    <th><a >Длительность</a></th>
                </row>
            </thead>
            <tbody id="tbody">
                <td data-th="Тип">
                    <img src="" alt="img" />
                </td>
                <td data-th="Время">19:00</td>
                <td data-th="Сотрудник">
                    <img src="" alt="ava" />
                </td>
                <td data-th="Звонок">+7 (987) 567-17-12</td>
                <td data-th="Источник">Rabota.ru</td>
                <td data-th="Оценка">Отлично</td>
                <td data-th="Длительность">12:06</td>
            </tbody>
          </table>
        </section>
      </div>
    </>
  );
};

export default Home;
