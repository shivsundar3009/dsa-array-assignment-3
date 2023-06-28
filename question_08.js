function canAttendMeetings(intervals) {
    // Sort the intervals based on start time
    intervals.sort((a, b) => a[0] - b[0]);
  
    // Check if any two consecutive intervals overlap
    for (let i = 0; i < intervals.length - 1; i++) {
      if (intervals[i][1] > intervals[i + 1][0]) {
        // Overlapping intervals found, person cannot attend all meetings
        return false;
      }
    }
  
    // No overlapping intervals found, person can attend all meetings
    return true;
  }