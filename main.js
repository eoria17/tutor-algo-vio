// Recursion

// Step1 - Define a base case: Identify the simplest case for which the solution is known or trivial.
//This is the stopping condition for the recursion, as it prevents the function from infinitely calling itself.

// Step2 - Define a recursive case: Define the problem in terms of smaller subproblems. Break the problem down into smaller versions of itself, and call the function recursively to solve each subproblem.

// Step3 - Ensure the recursion terminates: Make sure that the recursive function eventually reaches the base case, and does not enter an infinite loop.

// step4 - Combine the solutions: Combine the solutions of the subproblems to solve the original problem.

// Problem: show a sum of n numbers, starts from 1

function main(){
    const result = recAddNumberSum(5);
    console.log(result);
}

function addNumberSum(n){
    let sum = 0;
    for (let i = 1; i <= n; i++){
        sum = sum + i;
    }
    return sum;
}

function recAddNumberSum(n){
    // base case
    if (n === 1){
        return n
    }

    // recursive case
    const recResult = recAddNumberSum(n - 1)

    // recursion termination
    return n + recResult
}

// initiator
main();