
function eraseOverlapIntervals(intervals: number[][]): number {
    
    if(intervals.length === 0) { return 0};

    // sort the interval array based on the ending index
    intervals.sort((a,b) => a[1] - b[1])

    let count = 0; // count removals
    let end = intervals[0][1] // end time of first interval
    for(let i=1; i<intervals.length; i++) {
         if(intervals[i][0] < end) { // found an overlap
            count++;
         } else {
            end = intervals[i][1]
         }
    }

    return count
};

let num = [[0,2], [1,2], [2,3], [0,2],[-1,2]]
console.log(eraseOverlapIntervals(num));


