const rl = require('readline');
const ip = rl.createInterface({input:process.stdin, output:process.stdout});
var a,p;
ip.on('line', (ans)=> {a = ans.split(' ').map(n => Number(n))
p = a.filter(Boolean).sort(function(a, b){return a - b});
});


ip.on('close', () => {console.log(p[p.length-1])})
