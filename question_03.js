function nextPermutation(nums) {
    // Find the first decreasing element from the right
    let i = nums.length - 2;
    while (i >= 0 && nums[i] >= nums[i + 1]) {
      i--;
    }
  
    if (i >= 0) {
      // Find the first element greater than the decreasing element
      let j = nums.length - 1;
      while (j >= 0 && nums[j] <= nums[i]) {
        j--;
      }
      swap(nums, i, j);
    }
  
    // Reverse the elements from i+1 to the end
    reverse(nums, i + 1);
  
    return nums;
  }
  
  function swap(nums, i, j) {
    const temp = nums[i];
    nums[i] = nums[j];
    nums[j] = temp;
  }
  
  function reverse(nums, start) {
    let i = start;
    let j = nums.length - 1;
    while (i < j) {
      swap(nums, i, j);
      i++;
      j--;
    }
  }