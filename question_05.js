function plusOne(digits) {
    const n = digits.length;
    
    // Start from the rightmost digit
    for (let i = n - 1; i >= 0; i--) {
      // Increment the digit by 1
      digits[i]++;
      
      // Check if there is a carry
      if (digits[i] < 10) {
        // No carry, we're done
        return digits;
      } else {
        // Carry, set the current digit to 0
        digits[i] = 0;
      }
    }
    
    // If we reach this point, it means all digits were 9
    // Add an additional digit '1' at the beginning
    digits.unshift(1);
    
    return digits;
  }