const resultEl = document.getElementById('result');
const lengthEl = document.getElementById('length');
const uppercaseEl = document.getElementById('uppercase');
const lowercaseEl = document.getElementById('lowercase');
const numbersEl = document.getElementById('numbers');
const symbolsEl = document.getElementById('symbols');
const generateEl = document.getElementById('generate');
const clipboardEl = document.getElementById('clipboard');

const randomFunc = {
    lower: getRandonLower,
    upper: getRandonUpper,
    number: getRandonNumber,
    symbol: getRandonSymbol
};

clipboardEl.addEventListener('click', () => {
    const textarea = document.createElement('textarea');
    const password = resultEl.innerHTML;

    if(!password){return;}

    textarea.value = password;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    textarea.remove();
    alert('Password copied to clipboard'); 
});

generateEl.addEventListener('click', () => {
    const length = +lengthEl.value;
    
    const hasLower = lowercaseEl.checked;
    const hasUpper = uppercaseEl.checked;
    const hasNumber = numbersEl.checked;
    const hasSymbol = symbolsEl.checked;

    resultEl.innerText = generatePassword(hasUpper,hasLower,hasNumber,hasSymbol, length);
    
    // console.log(length);
    // console.log(hasUpper,hasLower,hasNumber,hasSymbol);
});

function generatePassword(lower, upper, number, symbol, length) {
    let generatePassword = '';
    const typeCount = lower + upper + number + symbol;
    const typesArr = [{lower}, {upper},{number},{symbol}].filter(item => Object.values(item)[0]);
    
    if(typeCount === 0) {
        return '';
    }

    for (let i = 0; i < length; i+= typeCount){
        typesArr.forEach(type => {
            const funcName = Object.keys(type)[0];
            generatePassword += randomFunc[funcName]();
            // console.log(funcName);
            // console.log(type);
        });
    }

    const finalPassword = generatePassword.slice(0, length);
    return finalPassword;
    // console.log(typesArr);
    // console.log(typeCount);
}


function getRandonLower() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

function getRandonUpper() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}


function getRandonNumber() {
    return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}

function getRandonSymbol() {
    const symbols = '!@#$%^&*(){}[]=<>/,.';
    return symbols[Math.floor(Math.random() * symbols.length)]; 
}

// console.log(getRandonLower());
// console.log(getRandonUpper());
// console.log(getRandonNumber());
// console.log(getRandonSymbol());