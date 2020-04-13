const rl = require('readline');
const ip = rl.createInterface({input:process.stdin, output:process.stdout});
var a;
ip.on('line', (ans) => {
    a = parseInt(ans);
});

function int_long(num){
    if (num <= 999){
        return 'INT'
    }
    else{
        return 'LONG'
    }
}

ip.on('close', () => {console.log(int_long(a))})
