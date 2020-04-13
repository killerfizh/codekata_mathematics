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

function generalizedGCD(arr) {
    // Use spread syntax to get minimum of array
    const lowest = Math.min(...arr);

    for (let factor = lowest; factor > 1; factor--) {
        let isCommonDivisor = true;

        for (let j = 0; j < arr.length; j++) {
            if (arr[j] % factor !== 0) {
                isCommonDivisor = false;
                break;
            }
        }

        if (isCommonDivisor) {
            return factor;
        }
    }

    return -1;
}

ip.on('close', () => {console.log(generalizedGCD(b))})
