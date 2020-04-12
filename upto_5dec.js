const rl = require('readline');
const ip = rl.createInterface({input:process.stdin, output:process.stdout});
var a,l,b,h;
ip.on('line', (ans)=> {
    a = ans.split(' ').map(n => Number(n));
});
function farm_area(n){
    var p = n[0]*n[1]
    return p.toFixed(5)
}




ip.on('close', () => {console.log(farm_area(a))})

