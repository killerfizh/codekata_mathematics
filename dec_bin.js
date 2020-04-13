const rl = require('readline');
const ip = rl.createInterface({input:process.stdin, output:process.stdout});
var a;
ip.on('line', (ans) => {
    a = parseInt(ans);
});

function Dec_Bin(num){
    var lst = []
    while (num > 0){
        lst.push(num%2);
        num = Math.floor(num/2);
    }
    return lst.reverse().join('')
}
ip.on('close', () => {console.log(Dec_Bin(a))})
