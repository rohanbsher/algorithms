from sorting.Sorting import Sorting
class BubbleSort(Sorting):

	def __init__(self, arr):
		self.arr = arr
	
	def sort(self, arr):
		for i in range(len(arr)):
			for j in range((len(arr)-1), i, -1):
				if(arr[j-1] > arr[j]):
					temp = arr[j]
					arr[j] = arr[j-1]
					arr[j-1] = temp
					print(f'swapped the element {arr[j]} with {arr[j-1]}')
					print(arr)

	
