function calculate() {
    console.log('ans');
};


window.addEventListener('load', () => {
    const current = document.querySelector("current-expression");   //現在の式
    const currentOperator = document.querySelector();   //現在の計算記号
    const beforeOperator = document.querySelector();    //１つ前の計算記号
    //const input = document.querySelector("#current-expression");
    


    function clickAc() {
        //全部クリア
        current = '';
        currentOperator = '';    
        beforeOperator = '';
    };
    
    function clickCe() {
        current.value = current.value.slice(0,-1);  //末尾を削除
    };
    
    function append(s) {
        console.log(s)
        switch (s){
            case '+':

        };

        if (s == '+') {
            ex = ex.slice(0,-1); // 最後尾を削除
            input.value = input.value.slice(0,-1);
            input.value += '+';
        } else if (s == '-') {
            ex = ex.slice(0,-1); // 最後尾を削除
            input.value = input.value.slice(0,-1);
            input.value += '-';
        } else if (s == '*') {
            ex = ex.slice(0,-1); // 最後尾を削除
            input.value = input.value.slice(0,-1);
            input.value += '×';
        } else if (s == '/') {
            ex = ex.slice(0,-1); // 最後尾を削除
            input.value = input.value.slice(0,-1);
            input.value += '÷';
        } else {
            input.value += s;
        }
        // 入力が記号か判定
        function checkOpe(){
            if (current==='+' or current==='-' or current==='*' or current==='/') {
                before = 
            }
        };
        // if (s=='+' or s =='-' or s=='' or s=='') {
        //     before = True;
        // } else {
        //     before = False;
        // }
        // // 記号が連続して入力されたら、更新する
        // if (before) {
        //     ex = ex.slice(0,-1); // 最後尾を削除
        // } 
        ex += s;
    };
});