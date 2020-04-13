const rl = require('readline');
const ip = rl.createInterface({input:process.stdin, output:process.stdout});
var a;
ip.on('line', (ans)=> {
    a = parseInt(ans);
});

function divi_check(num){
    count = 0;
    for (i=2; i<num; i++){
        if (num % i === 0){
            count++
        } 
    }
    return count >= 1 ? 'yes' : 'no' 
}

ip.on('close', () => {console.log(divi_check(a))})
