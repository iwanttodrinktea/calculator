const current = document.querySelector("#current-expression");   // current expression
const result = document.querySelector("#result");
let countOpe = 0;
let checkNum
let num1, num2;

// all clear
function clickAc() {
    if (current.value) {
        current.value = '';
        result.value = '';
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
    //console.log(s);
    switch (s){
        case '+':
            checkOpe();
            break;
        case '-':
            checkOpe();
            break;
        case '×':
            checkOpe();
            break;
        case '÷':
            checkOpe();
            break;
        case '.':
            checkDeci();
            break;
        default:
            // 数字のとき
    };   
    current.value += s;
}

// 入力が記号か判定　記号→前の入力が記号のとき、記号を変更する
function checkOpe() {
    if (current.value) {
        before = current.value.slice(-1);
        if (before==='+' || before==='-' || before==='×' || before==='÷') {
            current.value = current.value.slice(0,-1);
        }
    } else {
        // 入力が無い状態で、計算符号が入力された場合、0を符号の前に加える
        current.value = 0;
    }
}

function checkDeci() {
    if (current.value) {
        before = current.value.slice(-1);
        if (before==='+' || before==='-' || before==='×' || before==='÷') {
            // 計算記号の後にすぐ
            current.value += 0;
        } else if (before==='.') {
            current.value = current.value.slice(0,-1);
        }
    } else {    
        // 数字が無く最初に.が押されたとき、先頭に0を足す
        current.value = 0;
    }
}

// calculate
function calculate() {
    try {
        // Function()本当は良くない
        const ex = current.value.replaceAll('×','*').replaceAll('÷','/');
        // 数値の配列
        const not_num = ex.match(/[0-9]+\.[0-9]+\./g);
        if (not_num) {
            // 小数点が複数含まれている数値があるとき
            console.log("error");
        } else {
            // 計算できる式が入力された時
            const reg_num = ex.match(/[0-9]+\.?[0-9]*/g);
            const reg_ope = ex.match(/[\+\-\*\/]/g);
            console.log(reg_num,reg_ope);

            if (isNaN(cal)) {
                current.value = cal();
            } else if (cal == Infinity) {
                current.value = 'Infinity';
            } else {
                current.value = 'Error';
            }
        }
    } catch (error){
        console.error(error);
    }
}



//moji→数値　number
//正規化で数値と演算子を取り出す
//for文 for文で計算