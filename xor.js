const rl = require('readline');
const ip = rl.createInterface({input:process.stdin, output:process.stdout});
var a;
ip.on('line', (ans) => {
    a = ans.split(' ').map(n => Number(n));
});

function Dec_Bin_ones(num){
    var lst = []
    count = 0;
    while (num > 0){
        lst.push(num%2);
        num = Math.floor(num/2);
    }
    for(i=0; i<lst.length; i++){
        if (lst[i] == 1){
            count++
        }
    }
    return count
}

function xor(n){
    return Dec_Bin_ones(n[0]^n[1])
}

ip.on('close', () => {console.log(xor(a))})
