document.getElementById("sumButton").addEventListener("click", function() {
    let numbers = [];
    let sum = 0;

    for (let i = 0; i <= 100; i++) {
        numbers.push(i);
        sum += i;
    }

    console.log("Numbers:", numbers);
    console.log("Sum:", sum);
});
