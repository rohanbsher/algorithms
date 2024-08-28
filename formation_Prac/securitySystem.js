/*

We are working on a security system for a badged-access room in our company's building.
We want to find employees who badged into our secured room unusually often. We have an unordered list of names and entry times over a single day. Access times are given as numbers up to four digits in length using 24-hour time, such as "800" or "2250".

Write a function that finds anyone who badged into the room three or more times in a one-hour period. Your function should return each of the employees who fit that criteria, plus the times that they badged in during the one-hour period. If there are multiple one-hour periods where this was true for an employee, just return the earliest one for that employee.


badge_times = [
["Paul", "1355"],
["Jennifer", "1910"],
["John", "835"],
["John", "830"],
["Paul", "1315"],
["John", "1615"],
["John", "1640"],
["Paul", "1405"],
["John", "855"],
["John", "930"],
["John", "915"],
["John", "730"],
["John", "940"],
["Jennifer", "1335"],
["Jennifer", "730"],
["John", "1630"],
["Jennifer", "5"]
]

Expected output (in any order)
John: 830 835 855 915 930
Paul: 1315 1355 1405
n: length of the badge records array


test cases : 
input valid : 
0000 - 2400


basic idea in mind :
use a map to store the names and times values in array
map = "name", [...times] the values will be inserted in ascending order

[ith and the i+1] if they are within an hour bound then add this to the result

O(N) we have to loop over every element O(N) = O(N^2)
"john" => [800, 850, 835] n * o(nlogN)

we want to do it in n(log N) sort the


*/

function security(badgeTimes) {
	if (badgeTimes.length === 0) {
	  return []
	}
  
	let accessMap = new Map()
	// group badge time
	badgeTimes.forEach(([name, time]) => { // O(N)
	  if (!accessMap.has(name)) {
		accessMap.set(name, [])
	  }
	  accessMap.get(name).push(parseInt(time));
	})
  
	const result = {};
  
	// sort all access times for each employee
	accessMap.forEach((times, name) => {
	  times.sort((a,b) => a-b) // O(NlogN)
  
	  // console.log(times)
	  // sliding window // 800, 810, 850
	  for (let i = 0; i < times.length; i++) {
		let j = i;
		let windowTimes = [];
  
		while (j < times.length && times[j] - times[i] <= 100) {
		  windowTimes.push(times[j])
		  j++;
		}
  
		if (windowTimes.length >= 3) {
		  result[name] = windowTimes;
		  break;
		}     
	  }
	})
  
	return result;
  }
  
  badge_times = [
	["Paul", "1355"],
	["Jennifer", "1910"],
	["John", "835"],
	["John", "830"],
	["Paul", "1315"],
	["John", "1615"],
	["John", "1640"],
	["Paul", "1405"],
	["John", "855"],
	["John", "930"],
	["John", "915"],
	["John", "730"],
	["John", "940"],
	["Jennifer", "1335"],
	["Jennifer", "730"],
	["John", "1630"],
	["Jennifer", "5"]
  ]
  
  
  console.log(security(badge_times));