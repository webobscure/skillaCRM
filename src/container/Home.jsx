import { useEffect, useState } from 'react';
import { search } from '../assets';

const Home = () => {
  const [data, setData] = useState({});
  useEffect( () => {
    async function fetchList() {
      const response = await fetch('https://api.skilla.ru/mango/getList?23.12.2020', {
        method: 'POST',
        headers: { Authorization: 'Bearer testtoken' },
      })
        .then((res) => res.json())
        .then((json) => JSON.stringify(json));
        return response
    }

    console.log();
  }, [data]);

  return (
    <>
      <div className="container">
        <section className="table-section">
            <div className="controls">
                <img src={search} alt="" />
                <input type="text" placeholder="Поисп по звонкам" />
            </div>
            <table className="table-container"></table>
        </section>
      </div>
    </>
  );
};

export default Home;
