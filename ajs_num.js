const rl = require('readline');
const ip = rl.createInterface({input:process.stdin, output:process.stdout});
var a;
ip.on('line', (ans) => {
    a = ans.split('').map(n => Number(n));
});

function ajs(num){
    var str = num.join('').toString();
    count = 0;
   for(i=0; i<2; i++){
        count+=num[i]
   }
   var arr = count.toString()
   return str.includes(arr) ? '1' : '0'
}

ip.on('close', () => {console.log(ajs(a))})
