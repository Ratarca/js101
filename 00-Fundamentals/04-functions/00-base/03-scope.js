/*
    #GLOBAL SCOPE
-Variables and functions defined outside of any function are in the global scope.
-Global scope variables are accessible from any part of your JavaScript code, including inside functions.
-Be cautious with global scope as it can lead to naming conflicts and unintended side effects 
    when variables are accessed and modified from different parts of your code.
*/

const globalEnv = 'PRD';

function execute_software(){
    console.log(globalEnv)
}

execute_software()

/* 
    # LOCAL SCOPE
-Variables and functions defined inside a function are in local scope, also known as function scope.
-Local scope variables are only accessible within the function in which they are defined. They are not visible outside of the function.
-Local scope provides encapsulation, helping to prevent variable naming conflicts and unintended side effects.
*/

function video_reproduction(){
    const speed = 1.2
    console.log(`Execute on Speed ${speed}`)
    return true
}

// check this : console.log(speed)