const rl = require('readline');
const ip = rl.createInterface({input:process.stdin, output:process.stdout});
var a;

ip.on('line', (ans) => {
    a = parseInt(ans);
});

function min_odd_fct(num) {
    lst = [];
    for(i=1; i<=num; i++){
        if(num % i === 0 && (num/i) % 2 !== 0){
            lst.push(i)
        }
    }
    return lst.sort(function(a,b){return a-b})[0]
    }

ip.on('close', () => {console.log(min_odd_fct(a))});
