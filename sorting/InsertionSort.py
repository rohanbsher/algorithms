from sorting.Sorting import Sorting
class InsertionSort(Sorting):
	
	def __init__(self, arr):
		self.arr = arr

	def sort(self, arr):
		for i in range(len(arr)):
			temp = arr[i]
			piv = i - 1
			while piv >= 0 and temp < arr[piv]:
				arr[piv+1] = arr[piv]
				piv -= 1
			arr[piv+1] = temp
			print(f'Swapping element {arr[i-1]} with {arr[i]}')
			print(f'Update arr: {arr}')