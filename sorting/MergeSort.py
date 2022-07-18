from sorting.Sorting import Sorting
class MergeSort(Sorting):

	def __init__(self, arr):
		self.arr = arr

	def sort(self, arr):
		if len(arr) > 1:
  
         # Finding the mid of the array
			mid = len(arr)//2
	
			# Dividing the array elements
			L = arr[:mid]
	
			# into 2 halves
			R = arr[mid:]
	
			# Sorting the first half
			self.sort(L)
	
			# Sorting the second half
			self.sort(R)
	
			i = j = k = 0
	
			# Copy data to temp arrays L[] and R[]
			while i < len(L) and j < len(R):
				if L[i] < R[j]:
					arr[k] = L[i]
					i += 1
				else:
					arr[k] = R[j]
					j += 1
				k += 1
			print ( f' Updated arr : {arr}')
			# Checking if any element was left
			while i < len(L):
				arr[k] = L[i]
				i += 1
				k += 1
	
			while j < len(R):
				arr[k] = R[j]
				j += 1
				k += 1
			
			print(arr)


	 