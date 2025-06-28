# JavaScript Array Methods: `map`, `filter`, `reduce`, and `forEach`

## 1. `map()`

- **Purpose:** Creates a new array by applying a function to each element of the original array.
- **Syntax:**  
    ```js
    const newArray = array.map(callback(currentValue, index, array));
    ```
- **Example:**
    ```js
    const numbers = [1, 2, 3];
    const doubled = numbers.map(num => num * 2); // [2, 4, 6]
    ```

---

## 2. `filter()`

- **Purpose:** Creates a new array with all elements that pass the test implemented by the provided function.
- **Syntax:**  
    ```js
    const filteredArray = array.filter(callback(currentValue, index, array));
    ```
- **Example:**
    ```js
    const numbers = [1, 2, 3, 4];
    const even = numbers.filter(num => num % 2 === 0); // [2, 4]
    ```

---

## 3. `reduce()`

- **Purpose:** Reduces the array to a single value by executing a reducer function on each element.
- **Syntax:**  
    ```js
    const result = array.reduce(callback(accumulator, currentValue, index, array), initialValue);
    ```
- **Example:**
    ```js
    const numbers = [1, 2, 3, 4];
    const sum = numbers.reduce((acc, num) => acc + num, 0); // 10
    ```

---

## 4. `forEach()`

- **Purpose:** Executes a provided function once for each array element. Does not return a new array.
- **Syntax:**  
    ```js
    array.forEach(callback(currentValue, index, array));
    ```
- **Example:**
    ```js
    const numbers = [1, 2, 3];
    numbers.forEach(num => {
      console.log(num);
    });
    // Output: 1 2 3
    ```

---

## Summary Table

| Method   | Returns      | Callback Function Purpose         |
|----------|--------------|----------------------------------|
| map      | New array    | Transform each element           |
| filter   | New array    | Select elements that pass a test |
| reduce   | Single value | Accumulate values                |
| forEach  | undefined    | Execute side effects for each    |
