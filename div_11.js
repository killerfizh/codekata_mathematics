const rl = require('readline');
const ip = rl.createInterface({input:process.stdin, output:process.stdout});
var a;
ip.on('line', (ans) => {
    a = parseInt(ans);
});

function div_11(num){
    return num % 11 === 0 ? 'YES' : 'NO'
}

ip.on('close', () => {console.log(div_11(a))})
