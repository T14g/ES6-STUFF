// Coded By : https://github.com/T14g 
// reduce uses a callback function and a initial value
// the callback is called for each number, and returns the biggest one of the two

const numbers = [10,101,20,1,2,99,3];

const MaxValue = numbers.reduce((max, number) => {
    console.log(`${number} > ${max} = ${number > max}`);
    if(number > max){
        return number;
    }else{
        return max;
    }
},0);

console.log(MaxValue);  