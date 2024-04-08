

Program:

// Function that throws an error and never returns
function throwError(message: string): never {
    throw new Error(message);
}

// Function that always throws an error conditionally
function doSomething(condition: boolean): string {
    if (condition) {
        return "Success";
    } else {
        throwError("Condition is false"); // Error thrown here
    }
}