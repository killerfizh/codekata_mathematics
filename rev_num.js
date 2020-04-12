const rl = require('readline');
const ip = rl.createInterface({input:process.stdin, output:process.stdout});
var a;
ip.on('line', (ans)=> {
    a = ans.split('').map(n => Number(n));
});

function rev_num(n){
    return parseInt(n.reverse().join(''))
}

ip.on('close', () => {console.log(rev_num(a))})

