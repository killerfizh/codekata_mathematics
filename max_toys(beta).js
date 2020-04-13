const rl = require('readline');
const ip = rl.createInterface({input:process.stdin, output:process.stdout});
var a,b;
var count = 0;
ip.on('line', (ans) => {
    if (count === 0){
        a = ans.split(' ').map(n => Number(n));
        count++;
    }
    else if (count ==1){
        b = ans.split(' ').map(n => Number(n)).splice(0,a[1]+1);
        count++;
    }
    else{
        return
    }

});

function max_toys(lst,n){
    var res = []; 
    var count = 0;
   for(i of lst){
       if (i <= n){
           res.push(i);
       }
   }
   var sum = 0;
   var fnl = []
   while (count<n){
       
       for(j=1; j<res.length; j+=2){
        count += res[j-1]+res[j];
        sum++
       }
   }
   fnl.push(sum)
   return fnl.join('')
}

ip.on('close', () => {console.log(max_toys(b,a[1]))})

