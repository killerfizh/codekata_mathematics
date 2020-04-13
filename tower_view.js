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

function tower_vis(num){
    count = 1;
    
    for(i=0; i<num.length; i++){
       for(j = i+1; j<num.length; j++){
           if(num[i]<num[j]){
               count++
           }
          
       }
       break
}
return count
}

ip.on('close', () => {console.log(tower_vis(b))})
