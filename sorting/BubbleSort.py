class BubbleSort:

	def __init__(self, arr):
		self.arr = arr
	
	def bubbleSort(self, arr):
		for i in range(len(arr)):
			for j in range((len(arr)-1), i, -1):
				if(arr[j-1] > arr[j]):
					temp = arr[j]
					arr[j] = arr[j-1]
					arr[j-1] = temp
					print(f'swapped the element {arr[j]} with {arr[j-1]}')
					print(arr)

	def runProgram(self):
		self.bubbleSort(self.arr)
	
