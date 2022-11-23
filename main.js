//window.addEventListener('load', () => {
const current = document.querySelector("#current-expression");   // current expression
const result = document.querySelector("#result");

// all clear
function clickAc() {
    if (current.value) {
        current.value = '';
    }   
}

// clear entry
function clickCe() {
    if (current.value) {
        current.value = current.value.slice(0,-1);  //末尾を削除
    }
    
}

// add number or operator
function append(s) {
    console.log(s);
    switch (s){
        case '+':
            checkOpe();
            break;
        case '-':
            checkOpe();
            break;
        case '*':
            checkOpe();
            break;
        case '/':
            checkOpe();
            break;
        default:
            // 数字のとき
    };   
    current.value += s;
}

// 入力が記号か判定　記号→前の入力が記号のとき、記号を変更する
function checkOpe(){
    if (current.value) {
        before = current.value.slice(-1);
        if (!before) {
            console.log('null');
        } else if (before==='+' || before==='-' || before==='*' || before==='/') {
            current.value = current.value.slice(0,-1);
        }
    } else {
        // 入力が無い状態で、計算符号が入力された場合、0を符号の前に加える
        current.value = 0;
    }
    
}

// calculate
function calculate() {
    console.log('ans');
    
}
//});