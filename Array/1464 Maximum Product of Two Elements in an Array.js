//https://leetcode.com/problems/maximum-product-of-two-elements-in-an-array/description/

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {

let firstMax = Number.MIN_VALUE,
secondMax = Number.MIN_VALUE,
firsNeg = Number.MAX_VALUE,
secondneg = Number.MAX_VALUE


for(let i = 0; i<nums.length; i++){
    if (nums[i]>firstMax){
        secondMax = firstMax;
        firstMax = nums[i] - 1;
    }
    else if(nums[i] > secondMax) secondMax = nums[i] -1;

    
}

return firstMax* secondMax

    
};
