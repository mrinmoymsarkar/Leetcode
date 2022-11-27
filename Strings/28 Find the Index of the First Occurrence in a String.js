//https://leetcode.com/problems/find-the-index-of-the-first-occurrence-in-a-string/description/

var strStr = function(haystack, needle) {
    //approach 1
    // return (haystack.search(needle))

    //approach 2 two pointers

    let p1 = 0, p2 = 0, n1 = haystack.length, n2 = needle.length;

    while(p1< n1){
        if(haystack[p1] == needle[p2]){
            p2++
        }
        else{
            p1 = p1 - p2;
            p2 = 0;
        }

        p1++;
        if(p2 == n2) return p1 - p2
    }
    return -1
};

