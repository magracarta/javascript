import axios from "axios";
//브라우저 fetch
//노드 fetch
// axios = fetch + 여러기능(XMLHttpRequest)
(async () => {
    try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/todos/1');
        console.log(response.data);
    }
    catch (error) {
    }
})();
// const a = ()=>{};
// a.create = ()=>{};
// a.b = 'c';
// a.e = 'f';
// a.z = 123;
// a.isAxiosError = ()=>{};
// a();
// a.create();
// a.isAxiosError();
//# sourceMappingURL=axios.js.map