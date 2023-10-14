// 1. array ga akan kosong
// 2. array of int bakal ada angka negatif
// 3. angka di array pasti berbeda
function twoNumberSum1(array, targetSum) { // return array of int
    // Steps:
    // 1. buat array untuk result
    let result = []; // O(1)
    // 2. nested for loop array, untuk bandingin per angka
    const length = array.length; // O(1)
    for (let i = 0; i < length; i++) { // O(n^2)
        for (let j = i + 1; j < length; j++) {
            // 3. if hasil sum = target then append i & j ke array result
            if (array[i] + array[j] === targetSum) {
                result.push(array[i]);
                result.push(array[j]);
                // 4. return array result
                return result;
            }
        }
    }
    // 4. return array result
    return result; // O(1)
    // Time complexity = O(n^2)
    // Space complexity = O(1)
}

function twoNumberSum(array, targetSum) {
    // clue: pakai map
    // Steps:
    // 1. buat array untuk result & penampung / temp
    // 2. 


}

function main() {
    const testCases = [
        {
            "array": [3, 5, -4, 8, 11, 1, -1, 6],
            "targetSum": 10
        },
        {
            "array": [4, 6],
            "targetSum": 10
        },
        {
            "array": [4, 6, 1],
            "targetSum": 5
        },
        {
            "array": [4, 6, 1, -3],
            "targetSum": 3
        },
        {
            "array": [1, 2, 3, 4, 5, 6, 7, 8, 9],
            "targetSum": 17
        },
        {
            "array": [1, 2, 3, 4, 5, 6, 7, 8, 9, 15],
            "targetSum": 18
        },
        {
            "array": [-7, -5, -3, -1, 0, 1, 3, 5, 7],
            "targetSum": -5
        },
        {
            "array": [-21, 301, 12, 4, 65, 56, 210, 356, 9, -47],
            "targetSum": 163
        },
        {
            "array": [-21, 301, 12, 4, 65, 56, 210, 356, 9, -47],
            "targetSum": 164
        },
        {
            "array": [3, 5, -4, 8, 11, 1, -1, 6],
            "targetSum": 15
        },
        {
            "array": [14],
            "targetSum": 15
        },
        {
            "array": [15],
            "targetSum": 15
        }
    ];

    testCases.forEach((arr, targetSum) => {
        console.log("result: " + twoNumberSum(arr, targetSum))
    })
}

main();