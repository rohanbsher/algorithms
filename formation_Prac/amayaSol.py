"""
/*
'''
You're given an array containing either '.', 'L', or 'R' values. These values represent a starting state of a row of dominoes. L means the domino has been pushed to the left. R means the domino has been pushed to the right. All elements to the left  of an L get pushed to the left and all elements to the right of an R get pushed to the right. If a domino is pushed in both directions simultaneously, it stays up.

Given the starting state array, return the updated array representing the final state of the dominos. All dominos should be L, R or . if it stays standing upright.
 

EXAMPLE(S)
[., L, ., R, .] -> [L, L, ., R, R]
[., R, ., ., L, .] -> [., R, R, L, L, .]
[., R, ., ., ., L, .] -> [., R, R, .,  L, L, .]
[., R, ., L, ., L, ., R, .] -> [., R, ., L, L, L, ., R,R]


[. L . R .] -> [L L . R R]
[. R . . L .] -> [. R R L L .]
[. R . . . L .] -> [. R R .  L L .]
[. R . L . L . R .] -> [. R . L L L . RR]
[0 5 5            ]
[.  -5 -5 ]   
[   0     ]


[. R  .   .  L   . 
[0 5  5   4  0   0
[0 0 -4  -5  -5  0
[0 5. 1  -1. -5. 0 ]
 . R. R   L   L  .

The forces do not add up.
 
L ...R -> Same
R...L -> R R . L L -> Odd
R..L -> R R L L -> Even
R ...R -> R R R
L....L -> L L L


L ..... -> L ......
......L -> L L L L L

 L   L ....   R
-1  0    (N +1)

R .. R....L
1st Method:
- init an answer array the size of input array
- have a running force init to 0
- iterate from left to right
  - if the domino is an R we asign the force to length of the array
  - if its a '.' we aassign the force to running force minus 1
  - if its a left, reset the running force to 0
  - modifier ans at index i ,assign ans[i] to whatever the current force is

- iterate from right to left (reverse of above)
  - if the domino is an L we asign the force to length of the array (negative)
  - if its a '.' we aassign the force to running force minus 1
  - if its a left, reset the force to 0
  - minus current force from ans[i]

- go through the answer array and if the number is positive then its a R, negative it's a L, and if 0 then a '.'




FUNCTION SIGNATURE
def finalDominosState(dominosRow: list[str]):
'''
*/

def finalDominosState(dominosRow: list[str]):
  ans = [0] * len(dominosRow)
"""  

# L .
# 0 -1

def finalDominosState(dominosRow: list[str]):
    force_arr = [0] * len(dominosRow)
    ans = []
    n = len(dominosRow)

    running_force = 0

    for i in range(n):
        if dominosRow[i] == "R":
            running_force = n
        elif dominosRow[i] == "L":
            running_force = 0
        else:
            running_force = max(running_force - 1, 0)
        force_arr[i] = running_force
    # print("after left to right", force_arr)

    running_force = 0
    for i in range(n-1, -1, -1):
        if dominosRow[i] == "L":
            running_force = n
        elif dominosRow[i] == "R":
            running_force = 0
        else:
            running_force = max(running_force - 1, 0)

        force_arr[i] -= running_force

    # print("after right to left", force_arr)

    for force in force_arr:
        if force > 0:
            ans.append("R")
        elif force < 0:
            ans.append("L")
        else:
            ans.append(".")

    return ans

print(finalDominosState([]) == [])

print(finalDominosState(["."]) == ["."])
print(finalDominosState(["L"]) == ["L"])
print(finalDominosState(["R"]) == ["R"])

print(finalDominosState([".", "L", ".", "R", "."]) == ["L", "L", ".", "R", "R"])
print(finalDominosState([".", "R", ".", ".", "L", "."]) == [".", "R", "R", "L", "L", "."])
print(finalDominosState([".", "R", ".", ".", ".", "L", "."]) == [".", "R", "R", ".",  "L", "L", "."])
print(finalDominosState([".", "R", ".", "L", ".", "L", ".", "R", "."]) == [".", "R", ".", "L", "L", "L", ".", "R","R"])
    
print(finalDominosState(["L",".",".","."]) == ["L",".",".","."]) 
print(finalDominosState(["R",".",".","."]) == ["R","R","R","R"]) 


print(finalDominosState([".",".",".","L"]) == (["L","L","L","L"]))
print(finalDominosState([".",".",".","R"]) == ([".",".",".","R"]))
