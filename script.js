const randomFunc = {
    lower: getRandonLower,
    upper: getRandonUpper,
    number: getRandonNumber,
    symbol: getRandonSymbol
};


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