from sorting.BubbleSort import BubbleSort
from sorting.InsertionSort import InsertionSort
from sorting.MergeSort import MergeSort
from sorting.SelectionSort import SelectionSort

arr = [3,44,13,6,1,7,0,11,5,]

selectionSort = SelectionSort(arr)
selectionSort.runProgram()
print(selectionSort)

bubbleSort = BubbleSort(arr)
bubbleSort.runProgram()

insertionSort = InsertionSort(arr)
insertionSort.runProgram()

mergeSort = MergeSort(arr)
mergeSort.runProgram()
