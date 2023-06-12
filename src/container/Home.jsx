const Home = () => {
  function checkServer() {
    let order = fetch('https://api.skilla.ru/testapi', {
      method: 'POST',
      headers: {
        'Authentication': 'Bearer testtoken',
        'Acess-Control-Allow-Headers': 'API-Key,Content-Type,If-Modified-Since,Cache-Control',
      },
    });

    console.log(order);
  }

  return (
    <>
      <div className="container">
        <button onClick={checkServer}>Test</button>
      </div>
    </>
  );
};

export default Home;
