//https://leetcode.com/problems/maximum-subarray/description/

//o(n) approach Kadanes algorithm

var maxSubArray = function(nums) {
    let maxCount = -Infinity, currCount = 0;

    for(let i = 0; i< nums.length; i++){
        currCount+= nums[i]
        if(maxCount < currCount){
            maxCount =currCount
        }
        if(currCount< 0) currCount = 0;
    }

    return maxCount
    


};
