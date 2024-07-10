// const tinderUser = new Object()
const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

//console.log(tinderUser);

const regularUser = {
    email : "some@gmail.com",
    fullname: {
        userfullname : {
            firstname: "Madhav",
            lastname : "Narayan"
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1: "a", 2 : "b"}
const obj2 = {3 : "a", 4 : "b", 56 : {
    name : "Madhav",
    surname : "Narayan",
    cl : {
        11 : "vsd",
        54 : "dtgrgbdt"
    }
}}
//const obj3 = {obj1, obj2}

// const obj3 = Object.assign({}, obj1,obj2)

const obj3 = {...obj1, ...obj2}
// console.log(obj3);

const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
    
]
users[1].email

// console.log(tinderUser);
// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));


console.log(tinderUser.hasOwnProperty('isLoggedIn'));


const course = {
    coursename: "js in hindiCompetitive Programming Essentials",
    price: "499",
    courseInstructor : "Prateek Narang"
}

const {courseInstructor : instructor} = course



//console.log(courseInstructor);

console.log(instructor);

// {
//     "name" : "Madhav Narayan",
//     "coursename" : "Graphs",
//     "price" : "free"
// }

[
    {},
    {},
    {}
]

