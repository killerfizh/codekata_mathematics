const rl = require('readline');
const ip = rl.createInterface({input:process.stdin, output:process.stdout});
var a;
ip.on('line', (ans) => {
    a = parseInt(ans);
});
function eve_fact(num){
    var lst = [];
    for (i = 2; i<=num; i++){
        if ((num % i === 0) && (i % 2 === 0)){
            lst.push(i)
        }
    }
    return lst.length === 0 ? '-1' : lst.join(' ')
}

ip.on('close', () => {console.log(eve_fact(a))});
