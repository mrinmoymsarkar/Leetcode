//https://leetcode.com/problems/subarray-product-less-than-k/submissions/
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var numSubarrayProductLessThanK = function(nums, k) {
    let A= nums, B = k;
    let n = A.length;
      
        let sum = 0, count = 0;
        for(let i = 0; i<n; i++){
            sum = Number(A[i]);
            if(sum < B){
                count++
            }
            for(let j = i+1; j< n; j++){
                 sum = sum * Number(A[j])
            if(sum < B){
                count++
            }
            }
           
        }

        return count
};
