//https://leetcode.com/problems/single-element-in-a-sorted-array

/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNonDuplicate = function(nums) {
    let n = nums.length, low = 0, high = n -1;
      // edge cases
        if(n ==1){
            return nums[0]
        }
        if(nums[0]!= nums[1]){
            return nums[0]
        }
    if(nums[n-1]!= nums[n-2]){
        return nums[n-1]
    }
    
    while(low <= high){
        
      
        let mid = Math.floor((low + high)/2);
//          console.log('low', low)
//         console.log('high', high)
//         console.log(mid)
        
        if((nums[mid -1] != nums[mid])  && (nums[mid] != nums[mid + 1])){
            return nums[mid]
        }
        if(nums[mid -1] == nums[mid]) {
            mid = mid -1;
        }
        if(mid % 2 === 0){
            low = mid +2;
        }
        else{
            // console.log('mid', mid)
            // console.log('whay', high)
            high = mid -1;
        }
    }
    return nums[high +1]
};
