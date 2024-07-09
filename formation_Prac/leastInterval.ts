function leastInterval(tasks: string[], n: number): number {
	const taskMap: Map<string, number> = new Map();

	// Count the frequency of each task
	for (const task of tasks) {
		const count = taskMap.get(task) || 0;
		taskMap.set(task, count + 1);
	}

	// Find the maximum frequency
	let maxFrequency = 0;
	for (const count of taskMap.values()) {
		maxFrequency = Math.max(maxFrequency, count);
	}

	// Find how many tasks have the maximum frequency
	let maxCount = 0;
	for (const count of taskMap.values()) {
		if (count === maxFrequency) {
			maxCount++;
		}
	}

	// Calculate the minimum time
	const minTime = (maxFrequency - 1) * (n + 1) + maxCount;

	// Return the maximum of total tasks and calculated minimum time
	return Math.max(tasks.length, minTime);
}

// Example usage
console.log(leastInterval(["A", "A", "A", "B", "B", "B"], 2)); // Output: 8
console.log(leastInterval(["A", "C", "A", "B", "D", "B"], 1)); // Output: 6
console.log(leastInterval(["A", "A", "A", "B", "B", "B"], 3)); // Output: 10


/*
Chat gpt explaination 

The minimum time calculation in the Task Scheduler problem is a crucial aspect that directly addresses the challenge of scheduling tasks 
with cooling periods between identical tasks. The formula used, (maxFrequency - 1) * (n + 1) + maxCount, might seem a bit cryptic at 
first glance, but it's rooted in a logical approach to distributing tasks in a way that minimizes idle time. Here's a detailed breakdown:

Components of the Formula
maxFrequency: This is the highest occurrence of any task in the input array. If a task A appears maxFrequency times, it means we have 
to execute task A these many times, considering the cooling period between each execution.

n: The cooling period. It's the required minimum number of intervals before the same task can be executed again.

maxCount: The number of tasks that occur maxFrequency times. This is important because if multiple tasks share the maximum frequency, 
they can be scheduled in the same cycle without introducing additional idle time.

Why This Formula Works
(maxFrequency - 1): After executing a task for the first time, you have maxFrequency - 1 executions left. Between each of these executions, 
there must be at least n intervals of waiting (cooling period).

(n + 1): For each execution of the task (except the last one), you not only count the cooling period of n but also the execution slot
 itself (+1), hence n + 1.

Multiplying These Two: Gives you the total number of slots occupied by the most frequent task(s), including the cooling periods between them,
 but excluding the final execution of the task(s). This essentially outlines the backbone of the task schedule.

+ maxCount: Finally, you add maxCount to account for the last execution of each of the most frequent tasks. This ensures that if there are 
multiple tasks with the maximum frequency, each gets executed within the minimum time frame without requiring additional idle slots.

Practical Explanation
Imagine you have tasks A, A, A, B, B, B with n = 2. maxFrequency here is 3 (A and B both appear 3 times), and n is 2. According to the 
formula:

Base slots without last executions: (3-1) * (2+1) = 6. This accounts for two A's and two B's, with at least 2 idle slots between same tasks.

Adding last executions: +2 (for one last A and one last B).

Total: 8 slots.

In scenarios where maxCount is more than 1 (as in the example), it ensures that the schedule is tightly packed without unnecessary idles, 
adhering to the cooling period constraint.

Maximizing Efficiency
This calculation method effectively places tasks with the highest frequency (and thus the strictest cooling requirements) first, ensuring 
they dictate the overall schedule's length. By filling in gaps between these tasks with other, less frequent tasks, it minimizes idle time, 
ensuring an efficient, dense schedule.

In cases where the total number of tasks is greater than the calculated minimum time, the actual time to complete all tasks is simply the 
total number of tasks since there's enough task variety to fill in the cooling periods without idles. This is why the final step is to take 
the maximum between the total task count and the calculated minimum time.
*/