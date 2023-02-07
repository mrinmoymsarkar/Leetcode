//https://leetcode.com/problems/counting-bits/description/
/**
 * @param {number} n
 * @return {number[]}
 */
var countBits = function(n) {
    let A= []
    A[0] = 0;
    // for(let i = 1; i<=n; i++){
    //     let count = 0;
    //     let num = i
    //     while(num>0){
    //         num &= (num-1)
    //         count++
    //     }
    //     A[i] = count;
    // }

    // return A
for (let i = 0; i<=n;i++){
    A[i] = i%2 == 0? A[i/2] : A[Math.floor(i/2)] +1
}
return A
};
