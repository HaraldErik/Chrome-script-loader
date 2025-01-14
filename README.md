# Chrome-script-loader
Uses different exploits to try to run advanced java script in  the chrome browser and difrent part of the operating system
# WIP
This is  work in progress

Here you have useful links that you may need:
https://3kh0.github.io/ext-remover/
# Script functions
I ran a test with the script to se what fuctions where working
´´´

(function () {
    'use strict';

    const results = [];

    // Helper function to test and log results
    function logResult(testName, testResult) {
        results.push(`${testName}: ${testResult}`);
    }

    // Test 1: Simple math computation performance test
    const startMath = performance.now();
    for (let i = 0; i < 1000000; i++) {
        Math.sqrt(i);
    }
    const endMath = performance.now();
    logResult("Math computation performance (1 million iterations)", `${(endMath - startMath).toFixed(2)} ms`);

    // Test 2: Checking modern JavaScript feature support (Promises)
    const promiseTest = new Promise((resolve, reject) => {
        setTimeout(() => resolve("Promises are supported!"), 100);
    });
    promiseTest.then(result => {
        logResult("Promises support", result);
    }).catch(error => {
        logResult("Promises support", "Failed");
    });

    // Test 3: Checking async/await support
    async function asyncTest() {
        return "Async/Await is supported!";
    }
    asyncTest().then(result => {
        logResult("Async/Await support", result);
    }).catch(error => {
        logResult("Async/Await support", "Failed");
    });

    // Test 4: Checking if localStorage is available and functional
    try {
        localStorage.setItem("testKey", "testValue");
        const localStorageValue = localStorage.getItem("testKey");
        logResult("localStorage support", localStorageValue === "testValue" ? "Supported and functional" : "Supported but not functional");
    } catch (error) {
        logResult("localStorage support", "Not supported or error occurred");
    }

    // Test 5: Fetch API availability
    fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then(response => response.json())
        .then(data => {
            logResult("Fetch API support", "Supported and functional");
        })
        .catch(error => {
            logResult("Fetch API support", "Not supported or error occurred");
        });

    // Test 6: DOM manipulation test
    const testDiv = document.createElement('div');
    testDiv.innerHTML = "JavaScript is able to manipulate the DOM!";
    document.body.appendChild(testDiv);
    logResult("DOM manipulation", "Supported and functional");

    // Test 7: Error handling in JavaScript
    try {
        throw new Error("This is a test error!");
    } catch (error) {
        logResult("Error handling", error.message);
    }

    // Display the results as an alert
    setTimeout(() => {
        alert("JavaScript Test Results:\n" + results.join("\n"));
    }, 500);
})();
´´´
and the result where excellent

JavaScript Test Results:
Math computation performance (1 million iterations): 288.20 ms
localStorage support: Supported and functional
DOM manipulation: Supported and functional 
Error handling: This is a test error!
Async/Await support: Async/Await is supported! Promises support: Promises are supported!

Update:
Web Worker support. Web Worker is supported and functional!
Fetch API support: Supported and functional 


Match computation preformance is different from website and computer i got above 200 ms most of the time. The first time i did the test i got 288.20 ms

# how to load/execute the script
It can be loaded by using a userscript. There are currently 2 versions

the first one is the one you shoud use and try first. it works on most websites.

the second is a V2 made for websites that are not working but its more complicated

There arent any releases yet of the userscript
