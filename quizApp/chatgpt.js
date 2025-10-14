   // QUIZ DATA
        const quizQuestions = [
            {
    question: "What is the difference between the event loop's microtask queue and macrotask queue?",
    options: ["Microtasks have higher priority than macrotasks", "Macrotasks execute before microtasks", "They have the same priority", "There's no difference"],
    answer: "Microtasks have higher priority than macrotasks",
    difficulty: "hard",
    explanation: "Microtasks (promises, queueMicrotask) are processed before macrotasks (setTimeout, setInterval) in each event loop cycle."
  },
  {
    question: "What will this code output: console.log(typeof null)?",
    options: ["null", "object", "undefined", "number"],
    answer: "object",
    difficulty: "medium",
    explanation: "This is a famous JavaScript bug. typeof null returns 'object' due to how null is represented internally."
  },
  {
    question: "What is the purpose of WeakMap in JavaScript?",
    options: ["Store key-value pairs with weak references", "Create immutable objects", "Handle asynchronous operations", "Manage memory leaks"],
    answer: "Store key-value pairs with weak references",
    difficulty: "hard",
    explanation: "WeakMap allows garbage collection of keys when they're no longer referenced elsewhere, preventing memory leaks."
  },
  {
    question: "What is the difference between call(), apply(), and bind()?",
    options: ["call uses array, apply uses individual args, bind returns function", "apply uses array, call uses individual args, bind returns function", "No difference", "They're deprecated"],
    answer: "apply uses array, call uses individual args, bind returns function",
    difficulty: "medium",
    explanation: "apply() takes arguments as an array, call() takes individual arguments, bind() returns a new function."
  },
  {
    question: "What is hoisting in JavaScript?",
    options: ["Moving declarations to top of scope", "Lifting heavy objects", "Error handling mechanism", "Memory optimization"],
    answer: "Moving declarations to top of scope",
    difficulty: "medium",
    explanation: "Hoisting moves variable and function declarations to the top of their containing scope during compilation."
  },
  {
    question: "What is a closure in JavaScript?",
    options: ["Function that has access to outer scope variables", "Closing a browser tab", "Error handling", "Loop termination"],
    answer: "Function that has access to outer scope variables",
    difficulty: "hard",
    explanation: "A closure gives you access to an outer function's scope from an inner function, even after the outer function returns."
  },
  {
    question: "What is the difference between synchronous and asynchronous code?",
    options: ["Sync blocks execution, async doesn't", "No difference", "Async blocks execution, sync doesn't", "Both block execution"],
    answer: "Sync blocks execution, async doesn't",
    difficulty: "medium",
    explanation: "Synchronous code blocks execution until completed, asynchronous code doesn't block and continues executing."
  },
  {
    question: "What is event delegation in JavaScript?",
    options: ["Attaching events to parent instead of children", "Removing event listeners", "Creating custom events", "Event bubbling prevention"],
    answer: "Attaching events to parent instead of children",
    difficulty: "medium",
    explanation: "Event delegation uses event bubbling to handle events on parent elements instead of individual child elements."
  },
  {
    question: "What is the difference between '==' and '===' in JavaScript?",
    options: ["== checks type and value, === checks only value", "=== checks type and value, == allows type coercion", "No difference", "Both are deprecated"],
    answer: "=== checks type and value, == allows type coercion",
    difficulty: "easy",
    explanation: "=== performs strict equality (type and value), == performs loose equality with type coercion."
  },
  {
    question: "What is a Promise in JavaScript?",
    options: ["Object representing eventual completion of async operation", "A guarantee", "Error handling mechanism", "Loop structure"],
    answer: "Object representing eventual completion of async operation",
    difficulty: "medium",
    explanation: "A Promise is an object that represents the eventual completion or failure of an asynchronous operation."
  },

  // Advanced ES6+ Features
  {
    question: "What is destructuring assignment in ES6?",
    options: ["Extracting values from arrays/objects into variables", "Destroying objects", "Error handling", "Memory management"],
    answer: "Extracting values from arrays/objects into variables",
    difficulty: "medium",
    explanation: "Destructuring allows unpacking values from arrays or properties from objects into distinct variables."
  },
  {
    question: "What is the spread operator (...) in JavaScript?",
    options: ["Expands iterables into individual elements", "Mathematical operator", "Error operator", "Concatenation operator"],
    answer: "Expands iterables into individual elements",
    difficulty: "medium",
    explanation: "The spread operator expands an iterable (like an array) into individual elements."
  },
  {
    question: "What is the difference between arrow functions and regular functions?",
    options: ["Arrow functions don't have their own 'this'", "No difference", "Arrow functions are faster", "Regular functions are deprecated"],
    answer: "Arrow functions don't have their own 'this'",
    difficulty: "hard",
    explanation: "Arrow functions inherit 'this' from the enclosing scope and cannot be used as constructors."
  },
  {
    question: "What is a generator function in JavaScript?",
    options: ["Function that can pause and resume execution", "Function that generates random numbers", "Async function", "Constructor function"],
    answer: "Function that can pause and resume execution",
    difficulty: "hard",
    explanation: "Generator functions can pause execution with yield and resume later, allowing for lazy evaluation."
  },
  {
    question: "What is the purpose of Symbol in JavaScript?",
    options: ["Create unique identifiers", "Mathematical operations", "String manipulation", "Date formatting"],
    answer: "Create unique identifiers",
    difficulty: "hard",
    explanation: "Symbols are primitive data types that create unique identifiers, often used as object property keys."
  },

  // React.js Advanced
  {
    question: "What is the Virtual DOM in React?",
    options: ["JavaScript representation of the real DOM", "Alternative browser", "Database structure", "CSS framework"],
    answer: "JavaScript representation of the real DOM",
    difficulty: "medium",
    explanation: "Virtual DOM is a JavaScript object that represents the real DOM, enabling efficient updates through diffing."
  },
  {
    question: "What is the difference between functional and class components in React?",
    options: ["Functional use hooks, class use lifecycle methods", "No difference", "Class components are deprecated", "Functional components are slower"],
    answer: "Functional use hooks, class use lifecycle methods",
    difficulty: "medium",
    explanation: "Functional components use hooks for state and effects, class components use lifecycle methods."
  },
  {
    question: "What is React's reconciliation process?",
    options: ["Algorithm to update DOM efficiently", "Error handling", "State management", "Component creation"],
    answer: "Algorithm to update DOM efficiently",
    difficulty: "hard",
    explanation: "Reconciliation is React's diffing algorithm that determines what changes need to be made to the DOM."
  },
  {
    question: "What is the purpose of useEffect hook in React?",
    options: ["Handle side effects in functional components", "Update state", "Create components", "Handle errors"],
    answer: "Handle side effects in functional components",
    difficulty: "medium",
    explanation: "useEffect handles side effects like API calls, subscriptions, and DOM manipulation in functional components."
  },
  {
    question: "What is React Context used for?",
    options: ["Share data across component tree without prop drilling", "Component styling", "Error boundaries", "Performance optimization"],
    answer: "Share data across component tree without prop drilling",
    difficulty: "medium",
    explanation: "React Context provides a way to pass data through component tree without manually passing props."
  },

  // Node.js & Backend
  {
    question: "What is the event-driven architecture in Node.js?",
    options: ["Non-blocking I/O using events and callbacks", "Database architecture", "Frontend pattern", "Security model"],
    answer: "Non-blocking I/O using events and callbacks",
    difficulty: "hard",
    explanation: "Node.js uses event-driven, non-blocking I/O model that makes it lightweight and efficient."
  },
  {
    question: "What is middleware in Express.js?",
    options: ["Functions that execute during request-response cycle", "Database connector", "Template engine", "Security feature"],
    answer: "Functions that execute during request-response cycle",
    difficulty: "medium",
    explanation: "Middleware functions have access to request, response objects and can modify them or end the cycle."
  },
  {
    question: "What is the difference between process.nextTick() and setImmediate()?",
    options: ["nextTick executes before I/O events, setImmediate after", "No difference", "setImmediate is faster", "Both are deprecated"],
    answer: "nextTick executes before I/O events, setImmediate after",
    difficulty: "hard",
    explanation: "process.nextTick() callbacks execute before I/O events, setImmediate() callbacks execute after."
  },

  // CSS Advanced
  {
    question: "What is the CSS Box Model?",
    options: ["Content, padding, border, margin", "Flexbox container", "Grid system", "Animation model"],
    answer: "Content, padding, border, margin",
    difficulty: "medium",
    explanation: "The box model consists of content, padding, border, and margin areas around every element."
  },
  {
    question: "What is the difference between Flexbox and CSS Grid?",
    options: ["Flexbox is 1D, Grid is 2D", "Grid is deprecated", "No difference", "Flexbox is 2D, Grid is 1D"],
    answer: "Flexbox is 1D, Grid is 2D",
    difficulty: "medium",
    explanation: "Flexbox is designed for one-dimensional layouts, CSS Grid is designed for two-dimensional layouts."
  },
  {
    question: "What is CSS specificity?",
    options: ["Rules determining which styles apply when conflicts occur", "CSS validation", "Performance metric", "Browser compatibility"],
    answer: "Rules determining which styles apply when conflicts occur",
    difficulty: "medium",
    explanation: "Specificity determines which CSS rule is applied by browsers when multiple rules target the same element."
  },
  {
    question: "What is the purpose of CSS preprocessors like Sass/SCSS?",
    options: ["Add programming features to CSS", "Minify CSS", "Validate CSS", "Convert CSS to JavaScript"],
    answer: "Add programming features to CSS",
    difficulty: "medium",
    explanation: "CSS preprocessors add features like variables, nesting, mixins, and functions to CSS."
  },

  // Web Performance & Security
  {
    question: "What is lazy loading in web development?",
    options: ["Loading content only when needed", "Slow loading", "Background loading", "Preloading all content"],
    answer: "Loading content only when needed",
    difficulty: "medium",
    explanation: "Lazy loading defers loading of non-critical resources until they're needed, improving initial page load."
  },
  {
    question: "What is CORS (Cross-Origin Resource Sharing)?",
    options: ["Security mechanism controlling cross-domain requests", "Database feature", "CSS property", "HTML attribute"],
    answer: "Security mechanism controlling cross-domain requests",
    difficulty: "hard",
    explanation: "CORS is a security feature that allows or restricts web pages to access resources from other domains."
  },
  {
    question: "What is XSS (Cross-Site Scripting)?",
    options: ["Security vulnerability allowing script injection", "CSS framework", "JavaScript library", "Database query"],
    answer: "Security vulnerability allowing script injection",
    difficulty: "hard",
    explanation: "XSS is a vulnerability where attackers inject malicious scripts into web applications viewed by users."
  },
  {
    question: "What is CSRF (Cross-Site Request Forgery)?",
    options: ["Attack forcing users to execute unwanted actions", "Database attack", "CSS injection", "Performance issue"],
    answer: "Attack forcing users to execute unwanted actions",
    difficulty: "hard",
    explanation: "CSRF tricks users into submitting malicious requests while they're authenticated on a trusted site."
  },
  {
    question: "What is Content Security Policy (CSP)?",
    options: ["Security standard preventing XSS and data injection", "Content management", "Performance optimization", "SEO technique"],
    answer: "Security standard preventing XSS and data injection",
    difficulty: "hard",
    explanation: "CSP is a security layer that helps detect and mitigate XSS and data injection attacks."
  },

  // Database & APIs
  {
    question: "What is the difference between SQL and NoSQL databases?",
    options: ["SQL uses tables, NoSQL uses documents/key-value", "No difference", "SQL is faster", "NoSQL is deprecated"],
    answer: "SQL uses tables, NoSQL uses documents/key-value",
    difficulty: "medium",
    explanation: "SQL databases use structured tables with relationships, NoSQL uses flexible document or key-value stores."
  },
  {
    question: "What is a REST API?",
    options: ["Architectural style for web services using HTTP methods", "Database type", "JavaScript framework", "CSS methodology"],
    answer: "Architectural style for web services using HTTP methods",
    difficulty: "medium",
    explanation: "REST is an architectural style that uses HTTP methods (GET, POST, PUT, DELETE) for web service communication."
  },
  {
    question: "What is GraphQL?",
    options: ["Query language for APIs allowing flexible data fetching", "Database", "CSS framework", "JavaScript library"],
    answer: "Query language for APIs allowing flexible data fetching",
    difficulty: "hard",
    explanation: "GraphQL is a query language that allows clients to request exactly the data they need from APIs."
  },
  {
    question: "What is the difference between GET and POST HTTP methods?",
    options: ["GET retrieves data, POST sends data", "No difference", "POST is faster", "GET is more secure"],
    answer: "GET retrieves data, POST sends data",
    difficulty: "easy",
    explanation: "GET requests retrieve data from server, POST requests send data to server for processing."
  },

  // Testing & Development Tools
  {
    question: "What is unit testing in software development?",
    options: ["Testing individual components in isolation", "Testing entire application", "Performance testing", "Security testing"],
    answer: "Testing individual components in isolation",
    difficulty: "medium",
    explanation: "Unit testing involves testing individual components or functions in isolation from the rest of the system."
  },
  {
    question: "What is the purpose of webpack in modern web development?",
    options: ["Bundle and optimize web assets", "Database management", "Server hosting", "Code editor"],
    answer: "Bundle and optimize web assets",
    difficulty: "medium",
    explanation: "Webpack is a module bundler that bundles JavaScript files and other assets for browser use."
  },
  {
    question: "What is CI/CD in software development?",
    options: ["Continuous Integration/Continuous Deployment", "Code Interface/Code Documentation", "Client Interface/Client Database", "Component Integration/Component Development"],
    answer: "Continuous Integration/Continuous Deployment",
    difficulty: "medium",
    explanation: "CI/CD automates the integration of code changes and deployment to production environments."
  },

  // Advanced Web Concepts
  {
    question: "What is a Service Worker in web development?",
    options: ["Script running in background for offline functionality", "Server component", "Database worker", "CSS processor"],
    answer: "Script running in background for offline functionality",
    difficulty: "hard",
    explanation: "Service Workers are scripts that run in the background, enabling offline functionality and push notifications."
  },
  {
    question: "What is Progressive Web App (PWA)?",
    options: ["Web app with native app-like features", "Database application", "CSS framework", "JavaScript library"],
    answer: "Web app with native app-like features",
    difficulty: "medium",
    explanation: "PWAs are web applications that use modern web capabilities to deliver app-like experiences to users."
  },
  {
    question: "What is Server-Side Rendering (SSR)?",
    options: ["Rendering web pages on server before sending to client", "Client-side rendering", "Database rendering", "CSS rendering"],
    answer: "Rendering web pages on server before sending to client",
    difficulty: "hard",
    explanation: "SSR renders web pages on the server and sends complete HTML to the client, improving SEO and initial load time."
  },
  {
    question: "What is the difference between cookies and local storage?",
    options: ["Cookies sent with requests, localStorage is client-only", "No difference", "LocalStorage is more secure", "Cookies are larger"],
    answer: "Cookies sent with requests, localStorage is client-only",
    difficulty: "medium",
    explanation: "Cookies are sent with every HTTP request, localStorage is stored locally and not sent automatically."
  },

  // Framework Comparisons
  {
    question: "What is the main difference between React and Angular?",
    options: ["React is a library, Angular is a framework", "Angular is newer", "React is faster", "No difference"],
    answer: "React is a library, Angular is a framework",
    difficulty: "medium",
    explanation: "React is focused on UI components (library), Angular is a complete MVC framework with more built-in features."
  },
  {
    question: "What is Vue.js primarily known for?",
    options: ["Progressive framework with gentle learning curve", "Database management", "Server-side rendering only", "Mobile development"],
    answer: "Progressive framework with gentle learning curve",
    difficulty: "medium",
    explanation: "Vue.js is known as a progressive framework that's approachable for beginners yet powerful for complex apps."
  },

  // Modern JavaScript Features
  {
    question: "What is optional chaining (?.) in JavaScript?",
    options: ["Safely access nested properties without errors", "String manipulation", "Array method", "Error handling"],
    answer: "Safely access nested properties without errors",
    difficulty: "medium",
    explanation: "Optional chaining allows safe access to nested object properties even if intermediate properties are null/undefined."
  },
  {
    question: "What is nullish coalescing (??) operator?",
    options: ["Returns right operand when left is null/undefined", "Logical OR operator", "Assignment operator", "Comparison operator"],
    answer: "Returns right operand when left is null/undefined",
    difficulty: "medium",
    explanation: "Nullish coalescing returns the right operand when the left is null or undefined (but not other falsy values)."
  },
  {
    question: "What are template literals in JavaScript?",
    options: ["String literals with embedded expressions", "HTML templates", "CSS templates", "Database templates"],
    answer: "String literals with embedded expressions",
    difficulty: "easy",
    explanation: "Template literals use backticks and allow embedded expressions with ${} syntax."
  },

  // Additional Advanced Questions
  {
    question: "What is memoization in programming?",
    options: ["Caching function results to avoid recomputation", "Memory management", "Database optimization", "Error handling"],
    answer: "Caching function results to avoid recomputation",
    difficulty: "hard",
    explanation: "Memoization is an optimization technique that stores function results to avoid expensive recalculations."
  },
  {
    question: "What is the difference between debouncing and throttling?",
    options: ["Debouncing delays execution, throttling limits frequency", "No difference", "Throttling delays execution", "Both are the same"],
    answer: "Debouncing delays execution, throttling limits frequency",
    difficulty: "hard",
    explanation: "Debouncing delays function execution until after delay period, throttling limits execution to once per time period."
  },
  {
    question: "What is tree shaking in JavaScript?",
    options: ["Removing unused code from bundles", "DOM manipulation", "Data structure operation", "Performance testing"],
    answer: "Removing unused code from bundles",
    difficulty: "hard",
    explanation: "Tree shaking is a dead-code elimination technique to remove unused code from JavaScript bundles."
  },
  {
    question: "What is the purpose of Babel in JavaScript development?",
    options: ["Transpile modern JS to older versions for compatibility", "Database connector", "Testing framework", "Code editor"],
    answer: "Transpile modern JS to older versions for compatibility",
    difficulty: "medium",
    explanation: "Babel transpiles modern JavaScript syntax to older versions for browser compatibility."
  },
  {
    question: "What is polyfill in web development?",
    options: ["Code providing functionality missing in older browsers", "CSS framework", "JavaScript library", "Database feature"],
    answer: "Code providing functionality missing in older browsers",
    difficulty: "medium",
    explanation: "Polyfills provide modern functionality to older browsers that don't natively support it."
  },

  // More Advanced Concepts
  {
    question: "What is the difference between shallow and deep copying?",
    options: ["Shallow copies references, deep copies values recursively", "No difference", "Deep is faster", "Shallow is more secure"],
    answer: "Shallow copies references, deep copies values recursively",
    difficulty: "hard",
    explanation: "Shallow copy copies references to nested objects, deep copy creates new instances of all nested objects."
  },
  {
    question: "What is the Observer pattern in JavaScript?",
    options: ["Pattern where object notifies multiple dependents of state changes", "Database pattern", "CSS pattern", "Error handling pattern"],
    answer: "Pattern where object notifies multiple dependents of state changes",
    difficulty: "hard",
    explanation: "Observer pattern defines a one-to-many dependency between objects so multiple objects can observe state changes."
  },
  {
    question: "What is the Module pattern in JavaScript?",
    options: ["Pattern for creating encapsulated code with public/private methods", "Import/export syntax", "Database pattern", "CSS pattern"],
    answer: "Pattern for creating encapsulated code with public/private methods",
    difficulty: "hard",
    explanation: "Module pattern uses closures to create encapsulation and expose public interface while keeping internals private."
  },
  {
    question: "What is a Web Component?",
    options: ["Reusable custom elements with encapsulated functionality", "React component", "CSS component", "Database component"],
    answer: "Reusable custom elements with encapsulated functionality",
    difficulty: "hard",
    explanation: "Web Components are custom HTML elements with encapsulated functionality that work across different frameworks."
  },
  {
    question: "What is the Intersection Observer API used for?",
    options: ["Observing changes in intersection of target element with viewport", "Event handling", "Animation", "Data fetching"],
    answer: "Observing changes in intersection of target element with viewport",
    difficulty: "hard",
    explanation: "Intersection Observer API provides a way to asynchronously observe changes in intersection of elements with viewport."
  },

  // Additional 20 questions to reach 100+
  {
    question: "What is the difference between Map and Object in JavaScript?",
    options: ["Map allows any key type, Object keys are strings", "No difference", "Object is newer", "Map is deprecated"],
    answer: "Map allows any key type, Object keys are strings",
    difficulty: "medium",
    explanation: "Map allows any data type as keys, Objects are limited to strings and symbols as keys."
  },
  {
    question: "What is the purpose of the finally block in try-catch?",
    options: ["Code that runs regardless of try-catch outcome", "Error handling only", "Success handling only", "Not useful"],
    answer: "Code that runs regardless of try-catch outcome",
    difficulty: "medium",
    explanation: "Finally block executes regardless of whether an exception is thrown or caught."
  },
  {
    question: "What is currying in functional programming?",
    options: ["Transforming function with multiple args into sequence of functions", "Cooking technique", "Error handling", "Loop optimization"],
    answer: "Transforming function with multiple args into sequence of functions",
    difficulty: "hard",
    explanation: "Currying transforms a function with multiple arguments into a sequence of functions each taking a single argument."
  },
  {
    question: "What is the purpose of use strict in JavaScript?",
    options: ["Enables strict mode for better error detection", "Performance optimization", "Debugging tool", "Code formatting"],
    answer: "Enables strict mode for better error detection",
    difficulty: "medium",
    explanation: "Strict mode eliminates silent errors, fixes mistakes that make it difficult for JavaScript engines to optimize."
  },
  {
    question: "What is the difference between function declaration and function expression?",
    options: ["Declarations are hoisted, expressions are not", "No difference", "Expressions are faster", "Declarations are deprecated"],
    answer: "Declarations are hoisted, expressions are not",
    difficulty: "medium",
    explanation: "Function declarations are fully hoisted, function expressions are not hoisted (only variable declaration is)."
  },
  {
    question: "What is the Event Loop's call stack?",
    options: ["LIFO structure tracking function calls", "Event storage", "Variable storage", "Error handling"],
    answer: "LIFO structure tracking function calls",
    difficulty: "hard",
    explanation: "Call stack is a LIFO (Last In, First Out) structure that tracks function calls in JavaScript execution."
  },
  {
    question: "What is the difference between localStorage and sessionStorage?",
    options: ["localStorage persists until cleared, sessionStorage expires with tab", "No difference", "SessionStorage is larger", "LocalStorage is more secure"],
    answer: "localStorage persists until cleared, sessionStorage expires with tab",
    difficulty: "easy",
    explanation: "localStorage persists until explicitly cleared, sessionStorage is cleared when tab is closed."
  },
  {
    question: "What is a higher-order function in JavaScript?",
    options: ["Function that takes or returns other functions", "Function with high priority", "Complex function", "Built-in function"],
    answer: "Function that takes or returns other functions",
    difficulty: "medium",
    explanation: "Higher-order functions are functions that take other functions as arguments or return functions."
  },
  {
    question: "What is the purpose of Object.freeze() in JavaScript?",
    options: ["Makes object immutable", "Improves performance", "Error handling", "Memory optimization"],
    answer: "Makes object immutable",
    difficulty: "medium",
    explanation: "Object.freeze() prevents modification of existing properties and prevents new properties from being added."
  },
  {
    question: "What is prototype chain in JavaScript?",
    options: ["Mechanism for objects to inherit properties from other objects", "Database relationship", "CSS inheritance", "Error propagation"],
    answer: "Mechanism for objects to inherit properties from other objects",
    difficulty: "hard",
    explanation: "Prototype chain is JavaScript's inheritance mechanism where objects can inherit properties from other objects."
  },
  {
    question: "What is the difference between synchronous and asynchronous iteration?",
    options: ["Sync processes all at once, async processes one by one over time", "No difference", "Async is always faster", "Sync is deprecated"],
    answer: "Sync processes all at once, async processes one by one over time",
    difficulty: "hard",
    explanation: "Synchronous iteration processes all items immediately, asynchronous iteration processes items over time without blocking."
  },
  {
    question: "What is the purpose of the Proxy object in JavaScript?",
    options: ["Intercept and customize operations on objects", "Network requests", "Error handling", "Performance monitoring"],
    answer: "Intercept and customize operations on objects",
    difficulty: "hard",
    explanation: "Proxy allows you to intercept and redefine fundamental operations for objects (property access, assignment, etc)."
  },
  {
    question: "What is the difference between HTTP/1.1 and HTTP/2?",
    options: ["HTTP/2 supports multiplexing and server push", "No difference", "HTTP/1.1 is faster", "HTTP/2 is less secure"],
    answer: "HTTP/2 supports multiplexing and server push",
    difficulty: "hard",
    explanation: "HTTP/2 introduces multiplexing, server push, header compression, and binary framing for better performance."
  },
  {
    question: "What is the purpose of the AbortController in JavaScript?",
    options: ["Cancel ongoing asynchronous operations", "Error handling", "Performance monitoring", "Memory management"],
    answer: "Cancel ongoing asynchronous operations",
    difficulty: "hard",
    explanation: "AbortController provides a way to abort one or more DOM requests as needed, like fetch requests."
  },
  {
    question: "What is the difference between composition and inheritance?",
    options: ["Composition uses 'has-a', inheritance uses 'is-a' relationship", "No difference", "Inheritance is newer", "Composition is deprecated"],
    answer: "Composition uses 'has-a', inheritance uses 'is-a' relationship",
    difficulty: "hard",
    explanation: "Composition builds complex objects by combining simpler ones, inheritance extends existing classes."
  }
];
    

        // QUIZ STATE
        let currentQuestion = 0;
        let userAnswers = [];
        let timeRemaining = 30;
        let timerInterval;
        let selectedQuestions = [];

        // SHUFFLE FUNCTION
        function shuffle(array) {
            const shuffled = [...array];
            for (let i = shuffled.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
            }
            return shuffled;
        }

        // FLIP CLOCK FUNCTIONS
        function updateFlipClock(minutes, seconds) {
            const minutesTens = Math.floor(minutes / 10);
            const minutesUnits = minutes % 10;
            const secondsTens = Math.floor(seconds / 10);
            const secondsUnits = seconds % 10;

            updateFlipCard('minutes-tens', minutesTens);
            updateFlipCard('minutes-units', minutesUnits);
            updateFlipCard('seconds-tens', secondsTens);
            updateFlipCard('seconds-units', secondsUnits);
        }

        function updateFlipCard(id, newValue) {
            const flipClock = document.getElementById(id);
            const flipCard = flipClock.querySelector('.flip-card');
            const frontFace = flipCard.querySelector('.front');
            const backFace = flipCard.querySelector('.back');

            const currentValue = parseInt(frontFace.textContent);

            if (currentValue !== newValue) {
                // Set the back face to the new value
                backFace.textContent = newValue;
                
                // Add flipping class to trigger animation
                flipCard.classList.add('flipping');
                
                // After animation completes, update front face and remove class
                setTimeout(() => {
                    frontFace.textContent = newValue;
                    flipCard.classList.remove('flipping');
                }, 300);
            }
        }

        // TIMER FUNCTIONS
        function startTimer() {
            timerInterval = setInterval(() => {
                timeRemaining--;
                
                const minutes = Math.floor(timeRemaining / 60);
                const seconds = timeRemaining % 60;
                
                updateFlipClock(minutes, seconds);
                
                if (timeRemaining <= 0) {
                    clearInterval(timerInterval);
                    autoSubmitQuiz();
                }
            }, 1000);
        }

        function resetTimer() {
            clearInterval(timerInterval);
            timeRemaining = 30;
            const minutes = Math.floor(timeRemaining / 60);
            const seconds = timeRemaining % 60;
            updateFlipClock(minutes, seconds);
            startTimer();
        }

        // QUIZ FUNCTIONS
        function initQuiz() {
            // Shuffle questions and take 10
            selectedQuestions = shuffle(quizQuestions).slice(0, 10);
            userAnswers = new Array(10).fill(null);
            currentQuestion = 0;
            
            renderQuestion();
            renderQuestionDots();
            updateProgress();
            resetTimer();
        }

        function renderQuestion() {
            const question = selectedQuestions[currentQuestion];
            
            document.getElementById('question-number').textContent = `Question ${currentQuestion + 1} of ${selectedQuestions.length}`;
            document.getElementById('question-text').textContent = question.question;
            document.getElementById('difficulty').textContent = question.difficulty.charAt(0).toUpperCase() + question.difficulty.slice(1);
            document.getElementById('difficulty').className = `difficulty-badge difficulty-${question.difficulty}`;

            const optionsContainer = document.getElementById('options-container');
            optionsContainer.innerHTML = '';

            // Shuffle options
            const shuffledOptions = shuffle(question.options);
            
            shuffledOptions.forEach((option, index) => {
                const optionElement = document.createElement('div');
                optionElement.className = 'option';
                optionElement.onclick = () => selectOption(option);
                
                optionElement.innerHTML = `
                    <div class="option-letter">${String.fromCharCode(65 + index)}</div>
                    <div class="option-text">${option}</div>
                `;
                
                // Check if this option was previously selected
                if (userAnswers[currentQuestion] === option) {
                    optionElement.classList.add('selected');
                }
                
                optionsContainer.appendChild(optionElement);
            });

            updateNavigationButtons();
        }

        function selectOption(selectedAnswer) {
            userAnswers[currentQuestion] = selectedAnswer;
            
            // Update visual selection
            document.querySelectorAll('.option').forEach(option => {
                option.classList.remove('selected');
            });
            
            document.querySelectorAll('.option').forEach(option => {
                if (option.querySelector('.option-text').textContent === selectedAnswer) {
                    option.classList.add('selected');
                }
            });
            
            renderQuestionDots();
            updateFinishButton();
            
            // Play selection sound
            playSound('select');
        }

        function renderQuestionDots() {
            const dotsContainer = document.getElementById('question-dots');
            dotsContainer.innerHTML = '';
            
            selectedQuestions.forEach((_, index) => {
                const dot = document.createElement('div');
                dot.className = 'dot';
                dot.textContent = index + 1;
                dot.onclick = () => goToQuestion(index);
                
                if (index === currentQuestion) {
                    dot.classList.add('current');
                } else if (userAnswers[index] !== null) {
                    dot.classList.add('answered');
                }
                
                dotsContainer.appendChild(dot);
            });
        }

        function updateProgress() {
            const progress = ((currentQuestion + 1) / selectedQuestions.length) * 100;
            document.getElementById('progress').style.width = `${progress}%`;
        }

        function updateNavigationButtons() {
            document.getElementById('prev-btn').disabled = currentQuestion === 0;
            document.getElementById('next-btn').disabled = currentQuestion === selectedQuestions.length - 1;
        }

        function updateFinishButton() {
            const finishBtn = document.getElementById('finish-btn');
            const answeredCount = userAnswers.filter(answer => answer !== null).length;
            
            if (currentQuestion === selectedQuestions.length - 1 || answeredCount >= selectedQuestions.length) {
                finishBtn.style.display = 'block';
            } else {
                finishBtn.style.display = 'none';
            }
        }

        function goToQuestion(index) {
            currentQuestion = index;
            renderQuestion();
            renderQuestionDots();
            updateProgress();
            resetTimer();
        }

        function nextQuestion() {
            if (currentQuestion < selectedQuestions.length - 1) {
                currentQuestion++;
                renderQuestion();
                renderQuestionDots();
                updateProgress();
                resetTimer();
            }
        }

        function prevQuestion() {
            if (currentQuestion > 0) {
                currentQuestion--;
                renderQuestion();
                renderQuestionDots();
                updateProgress();
                resetTimer();
            }
        }

        function finishQuiz() {
            const answeredCount = userAnswers.filter(answer => answer !== null).length;
            const unansweredCount = selectedQuestions.length - answeredCount;
            
            if (unansweredCount > 0) {
                const confirmFinish = confirm(`You have ${unansweredCount} unanswered questions. Are you sure you want to finish?`);
                if (!confirmFinish) return;
            }
            
            clearInterval(timerInterval);
            showResults();
        }

        function autoSubmitQuiz() {
            alert('Time is up! The quiz will be submitted automatically.');
            showResults();
        }

        function showResults() {
            let correctAnswers = 0;
            
            const detailedResults = selectedQuestions.map((question, index) => {
                const userAnswer = userAnswers[index];
                const isCorrect = userAnswer === question.answer;
                if (isCorrect) correctAnswers++;
                
                return {
                    question: question.question,
                    userAnswer: userAnswer || 'Not answered',
                    correctAnswer: question.answer,
                    isCorrect: isCorrect,
                    explanation: question.explanation
                };
            });
            
            const percentage = Math.round((correctAnswers / selectedQuestions.length) * 100);
            const answeredCount = userAnswers.filter(answer => answer !== null).length;
            
            // Show results modal
            document.getElementById('final-score').textContent = `${percentage}%`;
            
            const resultsGrid = document.getElementById('results-grid');
            resultsGrid.innerHTML = `
                <div class="result-item">
                    <div class="result-number">${correctAnswers}</div>
                    <div class="result-label">Correct</div>
                </div>
                <div class="result-item">
                    <div class="result-number">${selectedQuestions.length - correctAnswers}</div>
                    <div class="result-label">Wrong</div>
                </div>
                <div class="result-item">
                    <div class="result-number">${answeredCount}</div>
                    <div class="result-label">Answered</div>
                </div>
                <div class="result-item">
                    <div class="result-number">${percentage}%</div>
                    <div class="result-label">Score</div>
                </div>
            `;
            
            const detailedResultsHTML = detailedResults.map((result, index) => `
                <div style="margin: 15px 0; padding: 15px; border-left: 4px solid ${result.isCorrect ? '#2ecc71' : '#e74c3c'}; background: ${result.isCorrect ? '#e8f8f5' : '#fdf2f2'};">
                    <strong>Q${index + 1}:</strong> ${result.question}<br>
                    <strong>Your answer:</strong> ${result.userAnswer} ${result.isCorrect ? '✅' : '❌'}<br>
                    ${!result.isCorrect ? `<strong>Correct answer:</strong> ${result.correctAnswer}<br>` : ''}
                    <em>${result.explanation}</em>
                </div>
            `).join('');
            
            document.getElementById('detailed-results').innerHTML = `
                <h3>Detailed Results:</h3>
                ${detailedResultsHTML}
            `;
            
            document.getElementById('results-modal').classList.add('show');
        }

        function closeResults() {
            document.getElementById('results-modal').classList.remove('show');
        }

        function startNewQuiz() {
            closeResults();
            initQuiz();
        }

        // SOUND FUNCTION
        function playSound(type) {
            const audioContext = new (window.AudioContext || window.webkitAudioContext)();
            const oscillator = audioContext.createOscillator();
            const gainNode = audioContext.createGain();
            
            oscillator.connect(gainNode);
            gainNode.connect(audioContext.destination);
            
            const frequencies = {
                select: 400,
                correct: 600,
                incorrect: 200
            };
            
            oscillator.frequency.setValueAtTime(frequencies[type] || 300, audioContext.currentTime);
            gainNode.gain.setValueAtTime(0.1, audioContext.currentTime);
            gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.2);
            
            oscillator.start();
            oscillator.stop(audioContext.currentTime + 0.2);
        }

        // EVENT LISTENERS
        document.getElementById('next-btn').addEventListener('click', nextQuestion);
        document.getElementById('prev-btn').addEventListener('click', prevQuestion);
        document.getElementById('finish-btn').addEventListener('click', finishQuiz);

        // Keyboard shortcuts
        document.addEventListener('keydown', (e) => {
            if (e.key >= '1' && e.key <= '4') {
                const options = document.querySelectorAll('.option');
                const optionIndex = parseInt(e.key) - 1;
                if (options[optionIndex]) {
                    options[optionIndex].click();
                }
            }
            if (e.key === 'ArrowLeft') prevQuestion();
            if (e.key === 'ArrowRight') nextQuestion();
            if (e.key === 'Escape') closeResults();
        });

        // INITIALIZE QUIZ
        window.onload = function() {
            initQuiz();
        };
    























        