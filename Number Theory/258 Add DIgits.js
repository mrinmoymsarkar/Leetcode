//https://leetcode.com/problems/add-digits/description/

/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function(num) {

    // o (logn)
    // let A = num;
    //         while(A>= 10){
    //             let t = A;
    //             A = 0
    //             while(t>0){
    //                 A+= t%10  
    //                 t = Math.floor(t/10)
    //             }
    //     }
    //     return  A

    //o(1)
    if (num === 0) return 0
    else if(num < 10) return num
    return num % 9 === 0 ? 9 : num% 9
        
};
