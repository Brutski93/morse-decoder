module.exports = {
    decode
}
const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let answer = '';
    let temp = '';
    for (let i = 0; i < expr.length; i += 10) {
        temp = '';
        for (let j = i; j < (i + 10); j += 2) {
            if (expr[j] === '*') temp = ' ';
            if (expr[j] === '1') {
                if (expr[j + 1] === '1') {temp = `${temp}-`;}
                else {temp = `${temp}.`;}
            }
        }
        if (temp !== ' ') answer += MORSE_TABLE[temp];
        else answer += temp;
    }
    return answer;
}

let a = '**********10101010111010111111';
console.log(decode(a));

/*j = i;
        while (j < (i + 10)) {
            if (expr[j] === '*') {
                answer = `${answer} `;
                break;
            }
            if (expr[j] === '1') {
                if (expr[j + 1] === '1') {temp = `${temp}-`;}
                else {temp = `${temp}.`;}
            }
            j += 2;
        }*/