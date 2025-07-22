

const numbers= [1,2,2,3,4,4,5];
const unique1= [...new Set(numbers)];
console.log(unique1);

const uniqueNumbers2 = numbers.filter((value, index, array) =>{
    return array.indexOf(value)===index;
});
console.log(uniqueNumbers2);
