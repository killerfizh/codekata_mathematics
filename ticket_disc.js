const rl = require('readline');
const ip = rl.createInterface({input:process.stdin, output:process.stdout});
var a,b,c;
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
    else if (count == 2){
        c = parseInt(ans);
        count++;
    }
    else{
        return
    }

});
function tic_check(lst, num){
    var q = [];
    
    for(i=0; i<lst.length; i++){
        if (lst[i] % num !== 0){
           q.push(0) 
        }
        else{
            q.push(1)
        }
    }
    return q.join(' ')
}

ip.on('close', () => {console.log(tic_check(b,c))})
