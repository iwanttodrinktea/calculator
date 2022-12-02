const current = document.querySelector("#current-expression");   // current expression
const result = document.querySelector("#result");
let flag = false;   //計算したか

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
    if (current.value === "Error") {
        current.value = "";
    }
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
            if (flag) {
                result.value = current.value;
                current.value = '';
                flag = false;
            }
            checkDeci();
            break;
        default:
            // 数字のとき
            if (flag) {
                result.value = current.value;
                current.value = '';
                flag = false;
            }
    };   
    current.value += s;
}

// 入力が記号か判定　記号→前の入力が記号のとき、記号を変更する
function checkOpe() {
    flag = false;
    if (current.value === "Infinity" || current.value === "Error") {
        result.value = current.value;
        current.value = '';
    }
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
        const ex = current.value.replaceAll('×','*').replaceAll('÷','/');
        // 数値の配列
        const not_num = ex.match(/[0-9]+\.[0-9]+\./g);
        if (not_num) {
            // 小数点が複数含まれている数値があるとき
            current.value= "Error";
        } else {
            // 計算できる式が入力された時
            let reg_num = ex.match(/[0-9]+\.?[0-9]*/g);
            let reg_ope = ex.match(/[\+\-\*\/]/g);
            let num1, num2, pos = 0;
            if (reg_ope) {
                // 計算を行う
                var repeat = reg_ope.length;
                for (let i=0; i<repeat; i++) {
                    // 掛け算、割算を左から順に行う
                    if (reg_ope[i-pos] === '*') {
                        // 掛け算を行い、元の配列の前の数字の位置に代入　後ろにはnull
                        num1 = Number(reg_num[i-pos]);
                        num2 = Number(reg_num[i+1-pos]);
                        reg_num[i-pos] = num1 * num2;
                        reg_num[i+1-pos] = null; 
                        // null削除
                        reg_num = reg_num.filter(function(x) {
                            return !(x === null || x === undefined || x === "");
                        })
                        // nullの部分を詰め、'*', '/'　の符号をリストから削除
                        reg_ope.splice(i-pos, 1);  // 計算が終了した符号削除
                        pos++;
                    } else if (reg_ope[i-pos] === '/') {
                        // 割算を行い、元の配列の前の数字の位置に代入　後ろにはnull
                        num1 = Number(reg_num[i-pos]);
                        num2 = Number(reg_num[i+1-pos]);
                        if (num1 === 0 && num2 === 0) {
                            reg_num[i-pos] = "Error";
                        } else {
                            reg_num[i-pos] = num1 / num2; 
                        }
                        reg_num[i+1-pos] = null; 
                        // null削除
                        reg_num = reg_num.filter(function(x) {
                            return !(x === null || x === undefined || x === "");
                        })
                        // nullの部分を詰め、'*', '/'　の符号をリストから削除
                        reg_ope.splice(i-pos, 1);  // 計算が終了した符号削除
                        pos++;
                    }
                }
                console.log(reg_num, reg_ope); 
                pos = 0; // 初期化
                if (reg_ope) {
                    for (let i=0; i<repeat; i++) {
                        // 足し算、引き算を左から順に行う
                        if (reg_ope[i-pos] === '+') {
                            // 足し算を行い、元の配列の前の数字の位置に代入　後ろにはnull
                            num1 = Number(reg_num[i-pos]);
                            num2 = Number(reg_num[i+1-pos]);
                            reg_num[i-pos] = num1 + num2;
                            reg_num[i+1-pos] = null; 
                            // null削除
                            reg_num = reg_num.filter(function(x) {
                                return !(x === null || x === undefined || x === "");
                            })
                            // nullの部分を詰め、'*', '/'　の符号をリストから削除
                            reg_ope.splice(i-pos, 1);  // 計算が終了した符号削除
                            pos++;
                        } else if (reg_ope[i-pos] === '-') {
                            // 割算を行い、元の配列の前の数字の位置に代入　後ろにはnull
                            num1 = Number(reg_num[i-pos]);
                            num2 = Number(reg_num[i+1-pos]);
                            reg_num[i-pos] = num1 - num2; 
                            reg_num[i+1-pos] = null; 
                            // null削除
                            reg_num = reg_num.filter(function(x) {
                                return !(x === null || x === undefined || x === "");
                            })
                            // nullの部分を詰め、'*', '/'　の符号をリストから削除
                            reg_ope.splice(i-pos, 1);  // 計算が終了した符号削除
                            pos++;
                        }
                    } 
                }
            result.value = current.value;
            current.value = reg_num[0];
            }
        }
        flag = true;
    } catch (error){
        console.error(error);
        current.value = "Error";
    }
}




// かける0, わる0のとき