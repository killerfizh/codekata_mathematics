const rl = require('readline');
const ip = rl.createInterface({input:process.stdin, output:process.stdout});
var a;

ip.on('line', (ans) => {
    a = Number(ans);
});

function ceil(n){
   return Math.ceil(n)

};

ip.on('close', () => {console.log(ceil(a))});
