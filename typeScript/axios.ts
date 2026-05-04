// import axios, { AxiosError, type AxiosResponse} from 'axios';

// interface Post {
//     id:number,
//     userId:string,
//     title:string,
//     body:string,
// };
// interface Created {
//      id:number,
//      title:string,
//     body:string,
// };
// interface Data {};

// interface Config<D = any>{
//     method? : 'post'|'get'|'patch'|'delete'|'head'|'option';
//     url? : string;
//     data?: D;
// }

// interface A{
//     get:<T = any, R = AxiosResponse<T>>(url: string)=> Promise<R>,
//     post:<T = any ,R = AxiosResponse<T>,D = any>(url:string, data: D)=> Promise<R>,
//     (): void,
//     isAxiosError:(error: unknown)=> error is AxiosError;
//     (config:Config): void,
//     (url: string, config:Config) : void,
// }

// const a:A = axios;
// (async()=>{
//     try{
//        const response = await a.get<Post,AxiosResponse<Post>>('https://jsonplaceholder.typicode.com/todos/1');
//     //    console.log(response.data);
//     //    console.log(response.data.userId);
//     //    console.log(response.data.id);
//     //    console.log(response.data.title);
//     //    console.log(response.data.body);

//         const response2 = await a.post<Created, AxiosResponse<Created>, Data>('https://jsonplaceholder.typicode.com/posts',{
//             title: 'foo',
//             body: 'bar',
//             userId: 1,
//         });

//         const response3 = await a({
//             method: 'post',
//             url : 'https://jsonplaceholder.typicode.com/posts',
//             data: {
//                 title: 'foo',
//                 body: 'bar',
//                 userId: 1,
//             }
//         });
//     }catch(error){
        
//         if(a.isAxiosError(error)){//커스텀 타입가드..
//             //{message : '서버장애입니다. 다시시도해주세요.'};
//             console.error((error.response as AxiosResponse<{message : string}>)?.data.message);
            
//             // console.error((error as AxiosError<{message: string}>).response?.data.message);
//         }
//         // const errorResponse = (error as AxiosError).response;
//         // console.error(errorResponse?.data);
//         // errorResponse?.data
//     }
// })();

// // const a = ()=>{};
// // a.create = ()=>{};
// // a.b = 'c';
// // a.e = 'f';
// // a.z = 123;
// // a.isAxiosError = ()=>{};

// // a();
// // a.create();
// // a.isAxiosError();