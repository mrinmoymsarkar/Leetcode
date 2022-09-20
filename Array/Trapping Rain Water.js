//https://leetcode.com/problems/trapping-rain-water/submissions/
/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
    let A = height;
        let leftMax = []
        leftMax[0] = A[0]

        for(let i = 1; i< A.length; i++){
            leftMax[i] = Math.max(leftMax[i -1], A[i])
        }

        let rightMax = new Array(A.length - 1)
        rightMax[A.length - 1] = A[A.length - 1]


        for(let i = A.length - 2; i>= 0; i--){

            
            rightMax[i] = Math.max(rightMax[i +1], A[i])
        }

        let ans = 0;

        for(let i = 0; i< A.length; i++){
            ans+= Math.min(leftMax[i], rightMax[i]) - A[i]
        }
          return ans;

  
};

    
