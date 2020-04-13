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

function sum_neg(lst){
    var count = 0;
    for(i=0; i<lst.length; i++){
        if (lst[i]<0){
            count += lst[i]
        }

    }
    return count !== 0 ? count : 0
}

ip.on('close', () => {console.log(sum_neg(b))})
