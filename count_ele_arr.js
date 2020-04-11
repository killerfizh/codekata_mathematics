const rl = require('readline');
const ip = rl.createInterface({input:process.stdin, output:process.stdout});
var a;
ip.on('line', (ans)=> {a = ans.split('').map(n => Number(n))
});


ip.on('close', () => {console.log(a.length)})
