var numbers = [14, -25, -56, 77, -40, 29, 58, -80];
console.log(numbers);
numbers = numbers.filter(function(x){
    return x > -1
});
console.log(numbers);