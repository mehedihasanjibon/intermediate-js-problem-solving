/*
 Write an arrow function where it will do the following:
a) It will take two array inputs
b) Combine the two arrays and assign them in a new array
c) Find the maximum number from the new array and return the
result
Print the result. 
*/


const func  = (arr1, arr2)=>{
    const newArr = [...arr1, ...arr2]
    let max = newArr[0]
    for(let i = 1; i < newArr.length; i++){
    if(max < newArr[i]){
    max = newArr[i]
    }
    }
    return max;
};