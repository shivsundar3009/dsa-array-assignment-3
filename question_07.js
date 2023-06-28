function findMissingRanges(nums, lower, upper) {
    const result = [];
  
    // Helper function to generate range string
    const generateRangeString = (start, end) => {
      return start === end ? start.toString() : start.toString() + '->' + end.toString();
    };
  
    // Handle the lower bound
    if (lower < nums[0]) {
      result.push(generateRangeString(lower, nums[0] - 1));
    }
  
    // Iterate through the nums array to find missing ranges
    for (let i = 1; i < nums.length; i++) {
      if (nums[i] > nums[i - 1] + 1) {
        result.push(generateRangeString(nums[i - 1] + 1, nums[i] - 1));
      }
    }
  
    // Handle the upper bound
    if (upper > nums[nums.length - 1]) {
      result.push(generateRangeString(nums[nums.length - 1] + 1, upper));
    }
  
    return result;
  }