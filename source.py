from sorting.BubbleSort import BubbleSort
from sorting.InsertionSort import InsertionSort
from sorting.MergeSort import MergeSort
from sorting.QuickSort import QuickSort
from sorting.SelectionSort import SelectionSort

arr = [3,44,13,6,1,7,0,11,5,]

# selectionSort = SelectionSort(arr)
# selectionSort.runProgram()
# print(selectionSort)

# bubbleSort = BubbleSort(arr)
# bubbleSort.runProgram()

# insertionSort = InsertionSort(arr)
# insertionSort.runProgram()

# mergeSort = MergeSort(arr)
# mergeSort.runProgram()

# quickSort = QuickSort(arr)
# quickSort.runProgram()

str1 = "aab"
str2 = "xxy"
 
def isIsomorphic(str1, str2): 
	ans = {}
	ret = True
	j = 0
	for keyVal in str1:
		if keyVal not in ans.keys():
			ans[keyVal] = str2[j]
			j += 1
		elif ans.get(keyVal) == str2[j]:
			ans[keyVal] = str2[j]
			ret = True
		else:
			ret = False
	return ret
 
print(isIsomorphic(str1, str2))
