// 512 https://leetcode.com/problems/matrix-diagonal-sum/submissions/

/**
 * @param {number[][]} mat
 * @return {number}
 */
var diagonalSum = function(mat) {
    let A= mat;
     let n = A.length;
	    let ans = 0, j = n - 1;
	 
	    for(let i =  0; i < n && j >=0; i++){
	            ans += A[i][i] 
            if(i!=j){
                ans+= A[i][j]
            }
            j--
	    }
	    
	    return ans;
	
};
