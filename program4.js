var numbers = [1,2,3,4,5];
var newArray = [];
var square = function(numbers)
{
    for(i=0;i< numbers.length; i++)
    {
        newArray.push(math.pow(numbers[i],2));
    }
    console.log(newArray);
}
