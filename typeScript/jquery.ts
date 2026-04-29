

// removeClass(
//     className_function?:
//         | JQuery.TypeOrArray<string>
//         | ((this: TElement, index: number, className: string) => string),
// ): this;

// this는 생략
// $("p").removeClass(( index , className)=>{
//     return 'myClass';
// }).addClass("yourClass");


// $(["p","t"]).text("hello");
// $(["p","t"]).text(function(){
//     console.log(this);
//     return true;
// });


// document.querySelector("h1")?.addEventListener('click',function(){
//     console.log(this);
// });




// const tag = $("ul li").addClass('hello').addClass(function (index){
//     return "item-"+index
// });


// $(tag).html(function(i:number){
//     console.log(this);
//     return $(this).data('name')+'입니다.';
// });

// // const div = document.createElement('div');
// // div.innerHTML = "hello" ;
// const div = document.createDocumentFragment();
// $(tag).html(div);

// // import $ from 'jquery';

// // const $ = required('jquery');
// // export = jQuery;


// // import * as $ from 'jquery';
// // = import $ = require('jquery');
// // import * as React from 'react';


// declare namespace ZeroCho {
//     const aa: string;
//     const bb: string;
// }

// ZeroCho.aa

interface zQuery<T> {
    text(param?: string | number| boolean| ((this: T,index:number)=> string| boolean | number)):this;
    html(param: string | Document|DocumentFragment):this;
}

const $tag: zQuery<HTMLElement>= $(["p","t"]) as unknown as zQuery<HTMLElement>;
$tag.text('123');
$tag.text(123);
$tag.text(function(index){
    console.log(this,index);
    return true;
});
$tag.text().html(document);




const tag = $("ul li").addClass('hello').addClass(function(index){
    return "item-"+index;
});

$(tag).html(document);


function add(x:string, y : string):string {
    return x+y;
}

add('1','2');