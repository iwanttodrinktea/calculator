// 変数宣言
let input = document.querySelector("#current-expression");
let ex = '';

function clickAc() {
    ex = '';
    console.log(ex);
};

function clickCe() {
    ex = ex.slice(0,-1); // 最後尾を削除
    console.log(ex);
};

function append(s) {
    ex += s;
    console.log(ex);
};

function calculate() {
    console.log('ans');
};

