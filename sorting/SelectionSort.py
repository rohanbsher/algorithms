class SelectionSort:

	# when the class is created init function is called to define attributes
	def __init__(self, arr):
		self.arr = arr

	def selectSort(self, arr):
		for i in range(len(arr)):
			minVal = arr[i]
			for j in range(i+1,len(arr)):
				if(arr[i] > arr[j]):
					temp = arr[j]
					arr[j] = arr[i]
					arr[i] = temp
					print(f'Swapping element {arr[j]} with {arr[i]}')
					print(f'Update arr: {arr}')
		print(arr)

# takes in the self object	
	def runSelectionSort(self):
		self.selectSort(self.arr)

