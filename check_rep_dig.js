const rl = require('readline');
const ip = rl.createInterface({input:process.stdin, output:process.stdout});
var a;

ip.on('line', (ans) => {
    a = ans.split('').map(n => Number(n));
});

function check_rep_dig(num) {
    var sum = 0;
    for (i=0; i<num.length; i++){
        count = 0;
        for (j = 0; j<num.length; j++){
            if(num[i]==num[j]){
                count++
            }
        }
        if (count >= 2){
            sum++;
        }
    }
    return sum > 1 ? 'yes' : 'no';
}
ip.on('close', () => {console.log(check_rep_dig(a))});
