


 function fetchList() {
    return fetch("https://api.skilla.ru/mango/getList?05.05.2020", {
        method: "POST", 
        headers: {
            Authorization: 'Bearer testtoken'
        }

    })
    .then((res) => res.json())
    .then((json) => JSON.stringify(json))



}

console.log(await fetchList());




export default fetchList;
