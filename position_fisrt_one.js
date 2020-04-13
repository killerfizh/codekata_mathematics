const rl = require('readline');
const ip = rl.createInterface({input:process.stdin, output:process.stdout});
var a;
ip.on('line', (ans) => {
    a = parseInt(ans);
});

function Dec_Bin(num){
    var lst = [];
    while (num > 0){
        lst.push(num%2);
        num = Math.floor(num/2);
    }

    for(j=0; j < lst.length; j++){
        count = 1;
        if (lst[j] == 1){
            return j+1
        }
        
    }
    
    
}
ip.on('close', () => {console.log(Dec_Bin(a))})
