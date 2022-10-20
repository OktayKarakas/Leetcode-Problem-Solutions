var missingNumber = function(nums) {
    let missingCountNum = 0;
    let correctTotal = 0;
    
    for(let i = 0; i< (nums.length + 1); i++) {
        correctTotal += i
        if(i < nums.length) {
            missingCountNum += nums[i]
        }
    }
    return (correctTotal - missingCountNum)
};