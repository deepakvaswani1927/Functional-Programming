const myArray = [11, 3, 5, 2, 4];

function find(array, isEven) {
    for(let item of array){
        if(isEven(item))
        {
            console.log("first even is: ",item);
            break;
        }
    }
}

// function to Check Even Numbers
function isEven(num) {
    return ((num % 2) == 0);
}
find(myArray,isEven);