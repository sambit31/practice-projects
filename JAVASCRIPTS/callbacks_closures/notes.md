# JavaScript Notes: Callbacks & Closures

## Callbacks

- **Definition:** A callback is a function passed as an argument to another function, to be executed later.
- **Purpose:** Used for asynchronous operations (e.g., reading files, making HTTP requests), and for customizing behavior in functions.
- **Example:**
    ```js
    function greet(name, callback) {
        console.log("Hello, " + name);
        callback();
    }

    function sayGoodbye() {
        console.log("Goodbye!");
    }

    greet("Alice", sayGoodbye);
    ```
- **Types:**
    - Synchronous callbacks (executed immediately)
    - Asynchronous callbacks (executed after an operation completes, e.g., setTimeout, API calls)
- **Common Uses:**
    - Event listeners:
        ```js
        document.getElementById("btn").addEventListener("click", function() {
            console.log("Button clicked!");
        });
        ```
    - Array methods:
        ```js
        [1, 2, 3].forEach(function(num) {
            console.log(num);
        });
        ```
    - Handling asynchronous code (e.g., Node.js callbacks):
        ```js
        fs.readFile('file.txt', function(err, data) {
            if (err) throw err;
            console.log(data);
        });
        ```
- **Drawbacks:**
    - Callback hell: deeply nested callbacks can make code hard to read and maintain.
    - Error handling can be tricky in complex callback chains.

## Closures

- **Definition:** A closure is a function that remembers its outer variables even after the outer function has finished executing.
- **Purpose:** Enables data privacy, stateful functions, and function factories.
- **Example:**
    ```js
    function makeCounter() {
        let count = 0;
        return function() {
            count++;
            return count;
        };
    }

    const counter = makeCounter();
    console.log(counter()); // 1
    console.log(counter()); // 2
    ```
- **How Closures Work:**
    - The inner function retains access to the variables of the outer function, even after the outer function has returned.
    - Useful for creating private variables and encapsulating state.
- **Use Cases:**
    - Data encapsulation (private variables)
    - Factory functions (functions that generate other functions)
    - Event handlers and callbacks that need access to specific data
    - Memoization and caching
- **Example: Data Privacy**
    ```js
    function secretHolder(secret) {
        return {
            getSecret: function() {
                return secret;
            }
        };
    }
    const holder = secretHolder("hidden");
    console.log(holder.getSecret()); // "hidden"
    ```
- **Potential Pitfalls:**
    - Unintended memory retention if closures hold references to large objects.
    - Can lead to bugs if not careful with variable scopes in loops.

## Key Points

- Callbacks allow functions to be flexible and handle asynchronous tasks.
- Closures enable functions to have private variables and maintain state.
- Both are fundamental concepts in JavaScript functional programming.
- Understanding callbacks and closures is essential for mastering asynchronous programming, event handling, and modular code design in JavaScript.
- Modern alternatives to callbacks for async code include Promises and async/await, but callbacks are still widely used.

