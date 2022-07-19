from re import S
from sorting.Sorting import Sorting
class QuickSort(Sorting):
    
    def __init__(self, arr):
        self.arr = arr
    
    def sort(self, arr):
        print('sorting qusing quick sort')
