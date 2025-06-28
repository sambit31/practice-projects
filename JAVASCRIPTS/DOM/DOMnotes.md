# DOM Manipulation Using JavaScript

## What is the DOM?

The **Document Object Model (DOM)** is a programming interface for web documents. It represents the page so that programs can change the document structure, style, and content.

---

## Accessing DOM Elements

```js
// By ID
const element = document.getElementById('myId');

// By Class Name
const items = document.getElementsByClassName('myClass');

// By Tag Name
const paragraphs = document.getElementsByTagName('p');

// Using Query Selector
const firstItem = document.querySelector('.myClass');
const allItems = document.querySelectorAll('.myClass');
```

---

## Modifying Elements

### Changing Content

```js
element.textContent = 'New Text';
element.innerHTML = '<strong>Bold Text</strong>';
```

### Changing Attributes

```js
element.setAttribute('src', 'image.png');
element.id = 'newId';
```

### Changing Styles

```js
element.style.color = 'red';
element.style.backgroundColor = 'yellow';
```

---

## Creating and Removing Elements

### Creating

```js
const newDiv = document.createElement('div');
newDiv.textContent = 'Hello!';
document.body.appendChild(newDiv);
```

### Removing

```js
element.remove();
```

---

## Event Handling

```js
element.addEventListener('click', function() {
    alert('Element clicked!');
});
```

---

## Example: Toggle Visibility

```js
const btn = document.getElementById('toggleBtn');
const box = document.getElementById('box');

btn.addEventListener('click', function() {
    box.style.display = box.style.display === 'none' ? 'block' : 'none';
});
```

---

## Summary

- Use DOM methods to select, modify, create, and remove elements.
- Use event listeners to make web pages interactive.
