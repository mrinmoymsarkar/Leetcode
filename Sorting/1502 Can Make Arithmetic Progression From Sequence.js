//https://leetcode.com/problems/can-make-arithmetic-progression-from-sequence/description/
var canMakeArithmeticProgression = function(arr) {
    let A = arr;
     let n = A.length
        A.sort((a,b)=> a-b)

        d = A[1] - A[0];

        for(let i = n-1; i>=1 ;i --){
            if(A[i]- A[i-1] != d) return 0
        }
        return 1
    
};
