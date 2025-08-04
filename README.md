# Simple JavaScript Encoder ✨

Transform your JavaScript code into a sequence of numbers and back again with ease! This tool lets you encode your code into a numeric string or decode it to its original form.

## Features 🚀
- **Encode**: Converts your JavaScript code into a compact series of numbers.
- **Decode**: Restores the numeric sequence back to readable JavaScript code.

---

## Encode Example
Want to see it in action? Here's how to encode a simple JavaScript snippet:

```javascript
const code = 'alert("Hello, World!");';
const result = encode(code);
```

**Output**:
```javascript
new Function(String.fromCharCode(97,108,101,114,116,40,34,72,101,108,108,111,44,32,87,111,114,108,100,33,34,41,59))();
```

---

## Decode Example
Ready to reverse the process? Check out this decoding example:

```javascript
const code = "new Function(String.fromCharCode(99,111,110,115,111,108,101,46,108,111,103,40,34,72,101,108,108,111,44,32,87,111,114,108,100,33,34,41,59))();";
const result = decode(code);
```

**Output**:
```javascript
console.log("Hello, World!");
```

---

> **⚠️ Important Note**  
> This is a basic, non-secure encoding method. For production-level security, consider using professional obfuscation or encryption tools to protect your JavaScript code.

Happy coding! 🎉