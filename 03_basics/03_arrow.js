const user = 
{
    username : "Striver",
    price : 999,

    welcomeMessage : function(){
        console.log(`${this.username}, welcome to website`);
        console.log(this);
    }
}

// user.welcomeMessage()
// user.username = "Aditya Verma"
// user.welcomeMessage()

// console.log(this);

// function chai(){
//     let username = "Madhav"
//     console.log(this.username);
// }
// chai()


// const chai = function() {
//     let username = "Madhav"
//     console.log(this);
// }


const chai = () => {
    let username = "Madhav"
    console.log(this);
}




//chai()

// const addTwo = (num1,num2) => {
//     return num1 + num2
// }
// const addTwo = (num1,num2) =>  num1 + num2
// const addTwo = (num1,num2) =>  (num1 + num2)
const addTwo = (num1,num2) => ( {username : "Madhav"})





console.log(addTwo(34,234));
