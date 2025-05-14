# 🌍 Global Object and `this` Keyword in JavaScript

This repository provides a detailed conceptual understanding of the **Global Object** in JavaScript and the behavior of the **`this` keyword** in various contexts such as global scope, functions, strict mode, object methods, event handlers, and arrow functions.

---

## 📌 Table of Contents

1. What is the Global Object?
2. Understanding the `this` Keyword
3. `this` in Different Contexts
4. Arrow Functions and `this`
5. Summary

---

## 1. 🌐 What is the Global Object?

The **Global Object** is a special object that provides access to built-in functions, global variables, and global scope features.

- In browsers, the global object is called `window`.
- In Node.js, it is called `global`.
- In modern JavaScript, you can use `globalThis` to refer to the global object regardless of the environment.

All globally declared variables and functions become properties of the global object (with `var`, not `let` or `const`).

---

## 2. 🔍 Understanding the `this` Keyword

The **`this` keyword** refers to the object that is currently executing the code. Its value is determined dynamically based on **how a function is called**, not where it is defined.

It does **not** always refer to the same thing — it can represent different values depending on the context.

---

## 3. ⚙️ `this` in Different Contexts

### 🧭 Global Context (Non-Strict Mode)

- In the global scope (outside any function), `this` refers to the **global object** (`window` in browsers).

### 🔐 Global Context (Strict Mode)

- In strict mode (`'use strict'`), `this` in the global context is **undefined**.

### 🔧 Inside a Regular Function

- In non-strict mode: `this` refers to the **global object**.
- In strict mode: `this` is **undefined**.

### 🏠 Inside an Object Method

- When a function is called as a method of an object, `this` refers to the **object itself**.

### 🧪 Inside a Constructor Function

- When using the `new` keyword, `this` refers to the **newly created object**.

---

## 4. 🏹 Arrow Functions and `this`

Arrow functions **do not have their own `this`**. Instead, they **lexically inherit `this` from their surrounding scope** (where the arrow function was defined).

This makes arrow functions useful for preserving the outer `this` context — for example, in callbacks or nested functions inside methods.

---

## 5. 🧾 Summary

| Context                    | `this` refers to                                 |
|---------------------------|--------------------------------------------------|
| Global (non-strict)       | Global object (`window`, `global`, or `globalThis`) |
| Global (strict mode)      | `undefined`                                      |
| Regular function (non-strict) | Global object                              |
| Regular function (strict) | `undefined`                                      |
| Object method             | The object that owns the method                  |
| Constructor function      | The newly created instance                       |
| Arrow function            | Inherits `this` from surrounding lexical scope   |

---

## 📚 References

- [MDN Web Docs – `this`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this)
- [MDN – Global Object](https://developer.mozilla.org/en-US/docs/Glossary/Global_object)
- [ECMAScript Spec – This](https://tc39.es/ecma262/#sec-this-keyword)

---


## 👨‍💻 Author

Documented by [Paras Jindal](https://github.com/Paras-jindal1604) as part of a structured journey to master JavaScript fundamentals from the ground up.

---
