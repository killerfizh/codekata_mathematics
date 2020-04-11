const rl = require('readline');
const ip = rl.createInterface({input:process.stdin, output:process.stdout});
var a,b;
var count = 0;
ip.on('line', (ans) => {
    if (count === 0){
        a = parseInt(ans);
        count++;
    }
    else if (count ==1){
        b = ans.split(' ').map(n => Number(n)).splice(0,a+1);
        count++;
    }
    else{
        return
    }

});

function min_ele(n){
    return n.sort(function(a, b){return a - b})[0]
}

ip.on('close', () => {console.log(min_ele(b))})
