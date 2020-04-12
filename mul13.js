const rl = require('readline');
const ip = rl.createInterface({input:process.stdin, output:process.stdout});
var a;
ip.on('line', (ans)=> {
    a = parseInt(ans);
});

function mul13(n){
    return n % 13 === 0 ? 'yes' : 'no'
}

ip.on('close', () => {console.log(mul13(a))})

