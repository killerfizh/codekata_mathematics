const rl = require('readline');
const ip = rl.createInterface({input:process.stdin, output:process.stdout});
var a;
ip.on('line', (ans) => {
    a = parseInt(ans);
});
function odd_fact(num){
    var lst = [];
    for (i = 1; i<=num; i++){
        if ((num % i === 0) && (i % 2 !== 0)){
            lst.push(i)
        }
    }
    return lst.join(' ')
}

ip.on('close', () => {console.log(odd_fact(a))});
