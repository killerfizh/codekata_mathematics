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

function single_ele_asc(n){
    var count = [];
    for(i=0; i<n.length; i++){
           if(n[i+1] - n[i] < 0){
               count.push(i)
               }
            }
    return count.length > 1 || count.length === 0 ? -1 : count.join('')
        }
      
        


ip.on('close', () => {console.log(single_ele_asc(b))})
