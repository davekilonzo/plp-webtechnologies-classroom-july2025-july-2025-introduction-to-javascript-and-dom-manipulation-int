// ==========================
// Part 1: JavaScript Basics
// ==========================
document.getElementById('checkAge').addEventListener('click', function() {
    let age = parseInt(document.getElementById('age').value);

    // Conditional logic
    if (age >= 18) {
        document.getElementById('ageResult').textContent = "You are an adult.";
    } else if (age > 0) {
        document.getElementById('ageResult').textContent = "You are a minor.";
    } else {
        document.getElementById('ageResult').textContent = "Please enter a valid age.";
    }
});

// ==========================
// Part 2: Functions
// ==========================

// Function to calculate sum of two numbers
function calculateSum(a, b) {
    return a + b;
}

// Function to format a greeting message
function greetUser(name) {
    return `Hello, ${name}! Welcome to JS learning.`;
}

document.getElementById('calcSum').addEventListener('click', function() {
    let num1 = parseFloat(document.getElementById('num1').value);
    let num2 = parseFloat(document.getElementById('num2').value);
    let sum = calculateSum(num1, num2);
    document.getElementById('sumResult').textContent = `The sum is ${sum}`;
});

// ==========================
// Part 3: Loops
// ==========================
document.getElementById('showNumbers').addEventListener('click', function() {
    const numberList = document.getElementById('numberList');
    numberList.innerHTML = ''; // Clear previous list

    // Using a for loop
    for (let i = 1; i <= 5; i++) {
        let li = document.createElement('li');
        li.textContent = `Number ${i}`;
        numberList.appendChild(li);
    }

    // Using forEach on an array
    let arr = ['Apple', 'Banana', 'Cherry'];
    arr.forEach(function(item) {
        let li = document.createElement('li');
        li.textContent = item;
        numberList.appendChild(li);
    });
});

// ==========================
// Part 4: DOM Manipulation
// ==========================

// Change background color on button click
document.getElementById('changeColorBtn').addEventListener('click', function() {
    document.body.style.backgroundColor = '#' + Math.floor(Math.random()*16777215).toString(16);
});

// Add new list item dynamically
document.getElementById('addItemBtn').addEventListener('click', function() {
    const ul = document.getElementById('dynamicList');
    const li = document.createElement('li');
    li.textContent = `Item ${ul.children.length + 1}`;
    ul.appendChild(li);
});

// Toggle text visibility
document.getElementById('toggleBtn').addEventListener('click', function() {
    const text = document.getElementById('toggleText');
    text.classList.toggle('hidden');
});
