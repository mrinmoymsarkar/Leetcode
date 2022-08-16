//https://leetcode.com/problems/longest-consecutive-sequence/
/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
    let A= nums;
    let h = new Set(A), n= A.length, ans =0;

		for (let i = 0; i<n; i++){
			if(!h.has(A[i]-1)){
				let j = 0;
				while(h.has(A[i]++)){
					j++
					ans = Math.max(ans, j )
				}
			}
		}
		return ans;
};
