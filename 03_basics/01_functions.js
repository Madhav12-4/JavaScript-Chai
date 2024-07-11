function sayMyName()
{
    console.log("M");
    console.log("A");
    console.log("D");
    console.log("H");
    console.log("A");
    console.log("V");
}

//sayMyName()

// function add(number1,number2)
// {
//     console.log( number1 + number2);
// }
function add(number1,number2)
{
    let res = number1 + number2;
    return res
}

const res = add(56,7)

// console.log("Result: ",res);

function loginUserMessage(userName)
{
    if(userName === undefined)
    {
        console.log("Please enter a username");
        return
    }
    else return `${userName} just Logged In`
}

// console.log(loginUserMessage("Madhav_Narayan"));
// console.log(loginUserMessage());


function calculateCartPrice(val1,val2,...num1)
{
    return num1
}

console.log(calculateCartPrice(200,400,500));


const user = {
    userName: "Madhav",
    price: 199
}

function handleObject(anyObject)
{
    console.log(`Username is ${anyObject.userName} and price is ${anyObject.price}`);
}

// handleObject(user)
handleObject({
    userName: "Sam",
    price : 399
})


const myNewArray = [200,400,100,600]

function returnSecondValue(getArray)
{
    return getArray[1]
}

console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([4327396,3424,424,243]));

