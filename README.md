# Express.js Unexpected Behavior: Sending data after res.json()
This repository demonstrates a common error in Express.js where sending data using `res.send()` after using `res.json()` leads to unexpected behavior.  `res.json()` implicitly ends the response, so any subsequent calls like `res.send()` will be ignored.

## The Bug
The `bug.js` file shows the incorrect usage:  a JSON response is sent using `res.json()`, followed by an attempt to send additional data with `res.send()`.  The `res.send()` call will be silently ignored.

## The Solution
The `bugSolution.js` file corrects this by removing the redundant `res.send()` call.  Only one method (`res.json()` or `res.send()`) should be used to send the response.  The choice depends on the type of data you're sending. Use `res.json()` for JSON and `res.send()` for other data types.