//https://leetcode.com/problems/largest-number/description/
var largestNumber = function(nums) {
    let A = nums;
      function comparator(a, b){
          if ( (a+ ''+b)>  (b+ ''+a)) return -1
          return 1
          

      }

      A = A.sort(comparator)
    let res =  A.reduce((a,b)=> a+ "" +b)
    if(A[0] == 0) return "0"
      return res.toString()
	
}
