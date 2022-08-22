from re import S
from sorting.Sorting import Sorting
class QuickSort(Sorting):
    
    def __init__(self, arr):
        self.arr = arr
    
    def sort(self, arr):
        start = 0
        end = len(arr) - 1
        piv = end - start
        leftArr = []
        rightArr = []

        for i in range(arr):
            if i in range(len(arr)):
                
