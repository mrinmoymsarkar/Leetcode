//https://leetcode.com/problems/merge-sorted-array/description/

var merge = function(nums1, m, nums2, n) {

// while (n) nums1[m+n-1] = m && nums1[m-1] > nums2[n-1] ? nums1[--m] : nums2[--n];
 let p1 = m-1, p2 = n-1

 for(let i = nums1.length -1; i>=0; i--){
     if(p1>= 0 && nums1[p1]> nums2[p2]){
         nums1[i] = nums1[p1];
         p1--;
     }
     else if(p2>=0){
         nums1[i] = nums2[p2];
         p2--
     }
 }
}
