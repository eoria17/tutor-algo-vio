// Recursion
// Step1 - Define a base case: Identify the simplest case for which the solution is known or trivial.
// This is the stopping condition for the recursion, as it prevents the function from infinitely calling itself.
// Step2 - Define a recursive case: Define the problem in terms of smaller subproblems. Break the problem down into smaller versions of itself, and call the function recursively to solve each subproblem.
// Step3 - Ensure the recursion terminates: Make sure that the recursive function eventually reaches the base case, and does not enter an infinite loop.
// Step4 - Combine the solutions: Combine the solutions of the subproblems to solve the original problem.

// Problem: show a sum of n numbers, starts from 1

function main() {
    const factorial = recFactorial(3);
    console.log(factorial);
    const fibonacci = recFibonacci(3);
    console.log(fibonacci);
    const sumFibonacci = recSumFibo(3);
    console.log(sumFibonacci);
}

function addNumberSum(n) {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum = sum + i;
    }
    return sum;
}

function recAddNumberSum(n) {
    // base case
    if (n === 1) {
        return n
    }
    // recursive case
    const recfibonacci = recAddNumberSum(n - 1)
    // recursion termination
    return n + recfibonacci
}

// PR
// 1. function scr rekursif u/ menampilkan hasil factorial dari n
function recFactorial(n) {
    // base case
    if (n === 0 || n === 1) {
        return 1;
    }
    // recursive case, 5! = 5 * 4!
    // recursion termination
    return n * recFactorial(n - 1);
}

// 2. function scr rekursif u/ menampilkan hasil bilangan fibonacci dari n (1,1,2,3,5,8,dst)
function recFibonacci(n) {
    // base case
    if (n === 0) {
        return 0;
    }
    if (n === 1) {
        return 1;
    }
    // recursive case, fibo(3) = fibo(2) + fibo(1) = 1 + 1 = 2
    // recursion termination
    return recFibonacci(n - 1) + recFibonacci(n - 2);
}

// fibo(3) = 1+1+2 = 4, fibo(5) = 1+1+2+3+5 = 12
// sum(3) = fibo(3) + fibo(2) + fibo(1)
function recSumFibo(n) {
    if (n === 0) {
        return 0;
    }
    // + recSumFibo krn biar trs rekursi & berhenti saat n = 0
    const fibonacci = recFibonacci(n);
    const sum = fibonacci + recSumFibo(n - 1);
    console.log('n:',n,', fibo(n):', fibonacci,', sum:', sum)
    return sum;
}

// 3. optional, function scr rekursif u/ menampilkan hasil dari 2^x dimana n = hasil dari pangkat
// n = 1, x = 0
// n = 4, x = 2
// n = 8, x = 3
// n = 16, x = 4
// n = ga ada -> return false

// test(4) = 2^2 return 2
// test(8) = 2^3 return 3
// yang dicari n bisa dibagi 2 brp kali dan itu habis
// kalau ga brt false
// Note: ini aku bingung ko rekursi nya kayak gimana, trs jg loopnya agak maksa batasnya n/2
function test(n) {
    if (n === 1) {
        return 0;
    }
    let count = 0;
    let temp = n;
    for (let i = 1; i <= n/2; i++) {
        let j = temp/2;
        // hasil bagi = float berarti tdk habis dibagi 2
        if (!Number.isInteger(j)) {
            break;
        }
        
        temp = j;
        console.log(j, temp, i)
        count++;
    }

    if (n === 2**count) {
        return count;
    }
    return false;
}

const x = test(12)
console.log(x)
// initiator
// main();
