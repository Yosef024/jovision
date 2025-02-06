function calculateSum() {
    let numbers = []; 
    for (let i = 0; i <= 100; i++) {
        numbers.push(i);
    }

    let evenNumbers = numbers.filter(num => num % 2 === 0);
    let sum = evenNumbers.reduce((acc, num) => acc + num, 0);

    document.getElementById("result").innerText = `Sum of even numbers: ${sum}`;
}
