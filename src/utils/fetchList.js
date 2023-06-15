const list = fetch('https://api.skilla.ru/mango/getList?05.05.2020', {
  method: 'POST',
  headers: {
    Authorization: 'Bearer testtoken',
  },
})
  .then((res) => res.json())
  

const printArray = async () => {
  const a = await list;

  console.log(a.results);
};

export default printArray;
