/* 
Write an arrow function where it will do the following:
a) It will take an array where the array elements will be the
name of your friends

b) Check if the length of each element is even, push elements
with even length to a new array and return the result
Print the result. 
*/

const nameOfFriends = (friendsArray) => {
    let evenNames = [];
    for (let i = 0; i < friendsArray.length; i++){
        const element = friendsArray[i];
        if(element.length % 2 == 0){
            evenNames.push(element);
        }
    }
    return evenNames;
}

const friendsNames = ["Sabiha" , "Rafi" , "Mosharof" , "Munna" , "Jahid"];
const even = nameOfFriends(friendsNames);
