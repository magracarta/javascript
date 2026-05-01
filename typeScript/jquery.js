// removeClass(
//     className_function?:
//         | JQuery.TypeOrArray<string>
//         | ((this: TElement, index: number, className: string) => string),
// ): this;
const $tag = $(["p", "t"]);
$tag.text('123');
$tag.text(123);
$tag.text(function (index) {
    console.log(this, index);
    return true;
});
$tag.text().html(document);
const tag = $("ul li").addClass('hello').addClass(function (index) {
    return "item-" + index;
});
$(tag).html(document);
function add(x, y) {
    return x + y;
}
add('1', '2');
export {};
//# sourceMappingURL=jquery.js.map