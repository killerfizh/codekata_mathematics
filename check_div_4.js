const rl = require('readline');
const ip = rl.createInterface({input:process.stdin, output:process.stdout});
var a;
ip.on('line', (ans) => {
    a = parseInt(ans);
});

function check_div_4(num){
    return num % 4 === 0 ? 'YES' : 'NO'
}

ip.on('close', () => {console.log(check_div_4(a))})
