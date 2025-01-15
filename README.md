# Node.js Server Unresponsiveness

This repository demonstrates a common issue in Node.js where a long-running synchronous operation in a request handler can cause the server to become unresponsive.  The problem stems from Node.js's single-threaded event loop architecture.  Blocking the event loop prevents it from processing other requests or events.

## Bug
The `server.js` file contains a simple HTTP server.  The request handler includes a `while` loop that simulates a long-running task. This task keeps the CPU busy for 5 seconds, during which time the server is unable to handle any new requests.  This results in the server becoming unresponsive.

## Solution
The `serverSolution.js` file demonstrates a solution to this problem.  Instead of using a synchronous operation, asynchronous operations and the `setTimeout` function are used to schedule task execution without blocking the event loop.  This allows the server to remain responsive, even during long-running tasks. 