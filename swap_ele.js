const rl = require('readline');
const ip = rl.createInterface({input:process.stdin, output:process.stdout});
var a;
var b;
var count =0;
var temp;

ip.on('line', (ans)=> {
   if (count === 0){
     a = Number(ans);
     count ++;
   }
   else if (count==1){
     b = ans.split(' ').map(e=> Number(e));
     b = b.splice(0,a);
     count++;
   }
   else{
     return
   }
   
});

function Swap_num(n){
     for (i = 1; i<n.length; i+=2){
       [n[i], n[i-1]] = [n[i-1], n[i]];
     }
     return n.join(' ');
}

ip.on('close', ()=> {console.log(Swap_num(b))});
