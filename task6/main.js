// Function to generate an array from 0 to 100
function generateArray() {
    return Array.from({ length: 101 }, (_, i) => i);
}

// Function to shuffle an array (Hint provided)
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

// A. Remove numbers divisible by 3 and print the array
function removeMultiplesOfThree() {
    let numbers = generateArray();
    let filteredArray = numbers.filter(num => num % 3 !== 0);
    console.log("Array after removing multiples of 3:", filteredArray);
}

// B. Add numbers from 100 to 150 and print the array
function addNumbersToArray() {
    let numbers = generateArray();
    let extraNumbers = Array.from({ length: 51 }, (_, i) => i + 100);
    let newArray = numbers.concat(extraNumbers);
    console.log("Array after adding numbers 100-150:", newArray);
}

// C. Add 3 to each array member and print it
function addThreeToEach() {
    let numbers = generateArray();
    let modifiedArray = numbers.map(num => num + 3);
    console.log("Array after adding 3 to each number:", modifiedArray);
}

// D. Print members from index 20 to 40
function printIndexRange() {
    let numbers = generateArray();
    console.log("Elements from index 20 to 40:", numbers.slice(20, 41));
}

// E. Shuffle array, print it, then sort in descending order and print again
function shuffleAndSort() {
    let numbers = generateArray();
    shuffleArray(numbers);
    console.log("Shuffled array:", numbers);

    let sortedArray = numbers.sort((a, b) => b - a);
    console.log("Sorted in descending order:", sortedArray);
}
