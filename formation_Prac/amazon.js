function suitableLocations(center, d) {
    // Write your code here
    
    // find how far all the centers are from point x 
    function totalDistance(x) {
        let totalDist = 0;
        for(let i=0; i < center.length; i++) {
            totalDist += 2 * Math.abs(center[i] - x)
        }
        return totalDist;
    }
    
    let lo = -1e9, hi = 1e9
    let found  = false;
    let first = -1
    
    while(lo<=hi) {
        let mid = lo + Math.floor((hi - lo) / 2);
        let dist = totalDistance(mid)
        let dist1 = totalDistance(mid +1)
        
        if(dist <= d) {
            found = true;
            first = mid;
            hi = mid -1
        } else if (dist < dist1) {
            hi = mid -1
        } else {
            lo = mid + 1
        }
    } 
    
    if(!found) { 
        return 0
    }
    
    lo = first;
    hi = 1e9;
    let last = -1
    
    while(lo <= hi) {
        let mid = lo + Math.floor((hi - lo) / 2);
        let dist = totalDistance(mid)
        let dist1 = totalDistance(mid +1)
        
        if(dist <= d) {
            last = mid
            lo = mid +1
        } else if (dist < dist1){
            hi = mid -1
        } else {
            lo = mid +1
        }
    }
    
    return last - first + 1
    
}