import { useEffect } from 'react';
import '../styles/App.css'
import { arrow, back, calendar, decline, progress, search } from '../assets';

const Home = (id) => {
  function getTime(date) {
    let time = new Date(date)

    return `${time.getHours()}:${time.getMinutes() < 10 ? '0' + time.getMinutes() : time.getMinutes()}`
  }

  function getDistance(sec) {
    let minutes = Math.floor(sec / 60)
    let seconds = sec % 60

    if(minutes == 0 && seconds == 0) {
      return `0:00`
    }else if(minutes == 0 && seconds <10) {
      return `0:0${seconds}`
    } else return `${minutes}:${seconds}`
    
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
    data.results.forEach((user) => {
      const markup = `<tr id=${user.person_id} className="user">
      <td className="type" data-th="Тип">
        <img src=${user.status === 'Дозвонился' ? progress : decline} alt="img" className="type-status"/>
      </td>
      <td className="time" data-th="Время" style="padding-left:54px;">
        ${getTime(user.date)}
      </td>
      <td className="tbody-worker" data-th="Сотрудник" style="padding-left:60px;">
        <img src=${user.person_avatar} alt="avatar" />
      </td>
      <td className="tbody-phone" data-th="Звонок" style="padding-left:50px;">
        +${user.partner_data.phone}
      </td>
      <td className="tbody-source" data-th="Источник" style="padding-left: 90px;">
        Rabota.ru
      </td>
      <td className="tbody-rate" data-th="Оценка" style="padding-left: 100px;" >
        ${user.status}
      </td>
      <td className="tbody-distance" data-th="Длительность" style="padding-left: 160px;">
        ${getDistance(user.time)}
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
        <div className="wallet">
          <p className='balance'>Баланс: <p className="currency">272 ₽ <button className="button">+</button> </p>  </p>
        </div>
        <div className="date-distance">
          <img src={back} alt="back" /> 
          <img src={calendar} alt="calendar" style={{'marginLeft': '21px'}}/>
          <p className='calendar-date'>3 дня</p>
          <img src={back} alt="next" style={{'transform':'rotate(180deg)', 'marginLeft': '21px'}} />
        </div>
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
