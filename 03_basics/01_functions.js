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
console.log(loginUserMessage());