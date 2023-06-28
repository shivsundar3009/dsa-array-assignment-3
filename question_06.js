function singleNumber(nums) {
    let result = 0;
  
    for (let num of nums) {
      // Using bitwise XOR operation
      result ^= num;
    }
  
    return result;
  }