const rl = require('readline');
const ip = rl.createInterface({input:process.stdin, output:process.stdout});
var a;
ip.on('line', (ans) => {
    a = ans.split('').map(n => Number(n));
});

function odd_dig_add(num){
    var count = 0;
    for (i=0; i<num.length; i++){
        if (num[i] % 2 !== 0){
            count +=num[i]
        }
    }
    return count % 2 === 0 ? 'E' : 'O'
}

ip.on('close', () => {console.log(odd_dig_add(a))})
