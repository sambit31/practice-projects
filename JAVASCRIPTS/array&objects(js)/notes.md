# Arrays and Objects in JavaScript

## Arrays

- Arrays are ordered collections of values.
- Elements are accessed by their index (starting from 0).

```javascript
const fruits = ['apple', 'banana', 'cherry'];
console.log(fruits[1]); // Output: banana
```

### Common Array Methods

- `push()`: Add to end
- `pop()`: Remove from end
- `shift()`: Remove from start
- `unshift()`: Add to start
- `forEach()`, `map()`, `filter()`, `reduce()`: Iterate and transform

```javascript
fruits.push('date'); // ['apple', 'banana', 'cherry', 'date']
```

---

## Objects

- Objects are collections of key-value pairs.
- Keys are strings (or Symbols), values can be any type.

```javascript
const person = {
    name: 'Alice',
    age: 25,
    isStudent: true
};
console.log(person.name); // Output: Alice
```

### Accessing and Modifying Properties

```javascript
person.age = 26;
person['isStudent'] = false;
```

### Looping Through Objects

```javascript
for (let key in person) {
    console.log(key, person[key]);
}
```

---

## Arrays of Objects

- Useful for storing collections of similar objects.

```javascript
const users = [
    { name: 'Bob', age: 30 },
    { name: 'Carol', age: 28 }
];
console.log(users[0].name); // Output: Bob
```

---

## Summary

- Use arrays for ordered lists.
- Use objects for key-value data.
- Combine both for complex data structures.
