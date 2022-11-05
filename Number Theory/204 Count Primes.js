//https://leetcode.com/problems/count-primes/description/

var countPrimes = function(n) {
    let A = n
    let lucky = new Array(A + 1).fill(1)
    for(let i = 2; i< A; i++){
        if(lucky[i] == 1 ){
            for(let j = i*i; j<A; j+=i){
                lucky[j] = 0;
            }
        }
    }
    let count = 0;
    for(let i = 2; i< A; i++){
        if(lucky[i] == 1){
            count ++
        }
    }
    return count;  
    
};
