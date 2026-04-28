

// removeClass(
//     className_function?:
//         | JQuery.TypeOrArray<string>
//         | ((this: TElement, index: number, className: string) => string),
// ): this;

// this는 생략
$("p").removeClass(( index , className)=>{
    return 'myClass';
}).addClass("yourClass");


$(["p","t"]).text("hello");
$(["p","t"]).text(function(){
    console.log(this);
    return true;
});


document.querySelector("h1")?.addEventListener('click',function(){
    console.log(this);
});




const tag = $("ul li").addClass('hello').addClass(function (index){
    return "item-"+index
});


$(tag).html(function(i:number){
    console.log(this);
    return $(this).data('name')+'입니다.';
});

// const div = document.createElement('div');
// div.innerHTML = "hello" ;
const div = document.createDocumentFragment();
$(tag).html(div);

// import $ from 'jquery';

// const $ = required('jquery');
// export = jQuery;


// import * as $ from 'jquery';
// = import $ = require('jquery');
// import * as React from 'react';


declare namespace ZeroCho {
    const aa: string;
    const bb: string;
}

ZeroCho.aa