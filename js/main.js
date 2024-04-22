let currentNumber = 0;
let lastNumber = null;
let kigou= '';

function clickNumber(num) {
    currentNumber = currentNumber * 10 +num;
    document.getElementById ('number_text').textContent = currentNumber;
    console.log('数字ボタンが表示されました');
    console.log('currentNumber:' + currentNumber + ' ,lastNumber: ' + lastNumber);
    if (kigou == '') {
        lastNumber=null;
    }
}

function reload_AC() {
    location.reload();
}

function clickkigou(kigouText) {
    keisan();
    kigou = kigouText;

    document.getElementById('kigou_td_w').style.backgroundColor = '#F0D3D1';
    document.getElementById('kigou_td_w').style.color = '#62585A';
    document.getElementById('kigou_td_k').style.backgroundColor = '#F0D3D1';
    document.getElementById('kigou_td_k').style.color = '#62585A';
    document.getElementById('kigou_td_t').style.backgroundColor = '#F0D3D1';
    document.getElementById('kigou_td_t').style.color = '#62585A';
    document.getElementById('kigou_td_h').style.backgroundColor = '#F0D3D1';
    document.getElementById('kigou_td_h').style.color = '#62585A';
    if (kigou == '/') {
        document.getElementById('kigou_td_w').style.backgroundColor = '#62585A';
        document.getElementById('kigou_td_w').style.color = '#F0D3D1';
    } else if (kigou == '*'){
        document.getElementById('kigou_td_k').style.backgroundColor = '#62585A';
        document.getElementById('kigou_td_k').style.color = '#F0D3D1';
    } else if (kigou == '+') {
        document.getElementById('kigou_td_t').style.backgroundColor = '#62585A';
        document.getElementById('kigou_td_t').style.color = '#F0D3D1';
    } else if (kigou == '-') {
        document.getElementById('kigou_td_h').style.backgroundColor = '#62585A';
        document.getElementById('kigou_td_h').style.color = '#F0D3D1';
    }
}

function keisan() {
    if (kigou == '/') {
        lastNumber = lastNumber / currentNumber;
    } else if (kigou == '*') {
        lastNumber = lastNumber * currentNumber;
    } else if (kigou == '+') {
        lastNumber = lastNumber + currentNumber;
    } else if (kigou == '-') {
        lastNumber = lastNumber - currentNumber;
    }
    
    if (lastNumber == null) {
        lastNumber= currentNumber;
    }

    currentNumber = 0;
    document.getElementById('number_text').textContent = lastNumber;
    console.log('記号ボタンが押されました');
    console.log('currentNumber:' + currentNumber + ' ,lastNumber: ' + lastNumber);
}

function tokushu(kazu) {
    if(kigou == '' && lastNumber != null) {
    lastNumber = lastNumber* kazu;
    document.getElementById('number_text').textContent = lastNumber;
} else {
    currentNumber = currentNumber * kazu;
    ducument.getElementById('number_text').textContent = currentNumber;
}
}