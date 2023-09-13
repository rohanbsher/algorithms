function solution(array) {

    // merge sort - ascending order
    // [6 5 4 3 2 1]
    // [ 6 5 4] [3 2 1]
    // [6] [5 4] [3] [2 1]
    // [6] [5] [4] [3] [2] [1]
    // [6] [4 5] [3] [1 2]
    // [4 5 6] [1 2 3]
    // [1 2 3 4 5 6]

    if (array.length <= 1) {
        return array
    }

    let midPoint = Math.floor(array.length / 2)
    let leftArr = solution(array.slice(0, midPoint))
    let rightArr = solution(array.slice(midPoint, array.length))

    return merge(leftArr, rightArr)

    function merge(leftArr, rightArr) {
        let arr3 = []
        let leftIdx = 0
        let rightIdx = 0

        while (leftArr.length > leftIdx && rightArr.length > rightIdx) {
            if (leftArr[leftIdx] <= rightArr[rightIdx]) {
                arr3.push(leftArr[leftIdx])
                leftIdx++
            } else {
                arr3.push(rightArr[rightIdx])
                rightIdx++
            }
        }
        return arr3.concat(leftArr.slice(leftIdx)).concat(rightArr.slice(rightIdx))
    }
}

let arr = [4, 3, 1, 33, 8, 24, 11]
console.log(solution(arr))