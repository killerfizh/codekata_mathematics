const rl = require('readline');
const ip = rl.createInterface({input:process.stdin, output:process.stdout});
var a;

ip.on('line', (ans) => {
    a = Number(ans);
});

function shuffle_cards(num) {
    if (num < 0) 
          return -1;
    else if (num == 0) 
        return 1;
    else if (num<26){
        return (num * shuffle_cards(num - 1));
    }
  }

ip.on('close', () => {console.log(shuffle_cards(a))});
