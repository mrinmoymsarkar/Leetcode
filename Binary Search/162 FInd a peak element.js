//https://leetcode.com/problems/find-peak-element/
/**
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function(nums) {
    let n = nums.length, low = 0; high = n -1;
    
    while(low <= high){
        mid= (low +high ) >> 1;
        if((mid ==0 || nums[mid-1] <= nums[mid]) &&
           (mid == n-1 || nums[mid]>= nums[mid+1])){
            return mid
        }
        
        if(mid> 0 && nums[mid-1]> nums[mid])  high = mid -1;
        else low = mid + 1;
    }
};
