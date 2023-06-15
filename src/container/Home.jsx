import { useEffect } from 'react';

import { arrow, progress, search } from '../assets';

const Home = (id) => {
  function getTime(date) {
    let time = new Date(date)

    return `${time.getHours()}:${time.getMinutes() < 10 ? '0' + time.getMinutes() : time.getMinutes()}`
  }

 useEffect(() => {
   fetch("https://api.skilla.ru/mango/getList", {
    method: 'POST',
    headers: {
      Authorization: 'Bearer testtoken'
    }
   })
   .then((res) => {
    return res.json()
   })
   .then(data => {
    console.log(data.results);
    data.results.forEach((user) => {
      const markup = `<tr id=${user.person_id}>
      <td className="type" data-th="Тип">
        <img src=${progress} alt="img" />
      </td>
      <td className="time" data-th="Время">
        ${getTime(user.date)}
      </td>
      <td className="tbody-worker" data-th="Сотрудник" >
        <img src=${user.person_avatar} alt="avatar" />
      </td>
      <td className="tbody-phone" data-th="Звонок" >
        +${user.partner_data.phone}
      </td>
      <td className="tbody-source" data-th="Источник" >
        ${user.partner_data.name}
      </td>
      <td className="tbody-rate" data-th="Оценка" >
        ${user.status}
      </td>
      <td className="tbody-distance" data-th="Длительность" >
        ${user.time}
      </td>
    </tr>`

      document.getElementById('tbody').insertAdjacentHTML('beforeend', markup)
    })
  })
   .catch(error => console.log(error))
 }, [id])
 

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
              
              
            </tbody>
          </table>
        </section>
      </div>
    </>
  );
};

export default Home;
