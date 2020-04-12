const rl = require('readline');
const ip = rl.createInterface({input:process.stdin, output:process.stdout});
var a,l,b,h;
ip.on('line', (ans)=> {
    a = ans.split(' ').map(n => Number(n));
    l = a[0];
    b = a[1];
    h = a[2];
});
function cuboid(l,b,h){
    var lst = [];
    lst.push(2*(l*b + b*h + h*l), l*b*h);
    return lst.join(' ')
}




ip.on('close', () => {console.log(cuboid(l,b,h))})

