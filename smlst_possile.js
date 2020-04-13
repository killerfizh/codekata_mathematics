const rl = require('readline');
const ip = rl.createInterface({input:process.stdin, output:process.stdout});
var a;

ip.on('line', (ans) => {
    a = ans.split('').map(n => Number(n));
});

function factorialize(num) {
    if (num < 0) 
          return -1;
    else if (num == 0) 
        return 1;
    else if (num<26){
        return (num * factorialize(num - 1));
    }
  }
function digit_fact_sum(res){
    count = 0;
    lst = []
    for(i=0; i<res.length; i++){
        count+=factorialize(res[i])
    }
    var arr = count.toString(10).replace(/\D/g, '0').split('').map(Number);
    return arr.sort(function(a,b){return a-b}).join('')
}
ip.on('close', () => {console.log(digit_fact_sum(a))});
