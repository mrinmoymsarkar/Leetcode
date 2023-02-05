https://leetcode.com/problems/search-a-2d-matrix/description/

var searchMatrix = function(matrix, target) {
    for(var nums of matrix){
        if(nums.includes(target)){
                    return  true
        }
    }
    return false
};

//
/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {

if(matrix.length === 0) return false;
let i = matrix.length, j = matrix[0].length;
let low = 0, high = (i * j -1);


while(low <= high){
    let mid = Math.floor((low + high)/2),
    row = Math.floor(mid/j), 
    col = mid % j
    if(target == matrix[row][col] ){
        return true;
    }
    else if(target > matrix[Math.floor(mid/j)][mid % j] )
    {
        low = mid +1
    }
    else{
        high = mid -1
    }
}
return false;
