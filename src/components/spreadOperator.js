import React, { Component } from 'react'

//Example Spread in function calls
//ES5
function sum(a, b) {
    return a + b;
  }
  
 console.log(sum(2,4,6,8)) //Output 6 (only first two arguments is applied though there are many)

 //ES6
const spreadSum = (...rest) => {
     let sum = 0
     rest.map(element => {
        sum += element
     });
     console.log(sum)
 }

spreadSum(2,4,6,8) //Output 20 (Unlimited number of arguments can be use now for addition)


 //Example Spread in array literals (Copying arrays)
let language = ["PHP", "Javascript", "Python", "Java"];
let newLanguage = [...language]

console.log(newLanguage) //Output ["PHP", "Javascript", "Python", "Java"]


//Example Spread in array literals (Merging arrays)
let name = ['Manish', "Shiva", "Mahesh", "Aditya"]
let newName = ['Rakesh', "Jitendra", "Ajay"]
let mergeNames = [...name, ...newName]

console.log(mergeNames) //Output ["Manish", "Shiva", "Mahesh", "Aditya", "Rakesh", "Jitendra", "Ajay"]


//Example Spread in array literals (In Destructuring variable)
let fruits = ["Apple", "Mango", "Banana", "Grapes"]
const [fav, ...restFruits] = fruits

console.log(fav) //Output Apple
console.log(restFruits)//Output ["Mango", "Banana", "Grapes"]

 //Example Spread in object literals (Copying objects)
 let profile = {name: "manish", age: 27, job: 'Developer'}
 let newProfile = {...profile}
 
 console.log(newProfile) //Output {name: "manish", age: 27, job: 'Developer'}

 //Example Spread in object literals (Merging objects)
let location = {Country: "India", city:"kolkata", pin: "700024"}
let latLong = {latitude: 47.209, longitude: 80.532}
let mergeAddress = {...location, ...latLong}

console.log(mergeAddress) //Output {Country: "India", city: "kolkata", pin: "700024", latitude: 47.209, longitude: 80.532}

//Example Spread in array literals (In Destructuring variable)
let details = {id: 21 , username: "Manntrix", url: "http://google.com", place: "India"}
const {id, username, ...restDetails} = details

console.log(id)//Output 21
console.log(username)//Output Manntrix
console.log(restDetails)//Output {url: "http://google.com", place: "India"}


//String to single character array
let myname = "Manish"
let characters = [...myname]

console.log(characters)//Output ["M", "a", "n", "i", "s", "h"]

//Spread Operator in console.log
let myArray = ['TV', 'AC', 'Fan']

console.log(myArray)//General Output ["TV", "AC", "Fan"]
console.log(...myArray)//Output TV AC Fan

//Remove Duplicate entries from an Array
let myNumber = [1,2,3,6,2,9,4,5,1,2,3,5,4,9,8,4]
let names = ["Manish", "Aditya", "Ram", "Manish", "Ram", "Rajesh"]

let uniqueNumber = [...new Set(myNumber)]
let uniqueNames = [...new Set(names)]

console.log(uniqueNumber)//Output [1, 2, 3, 6, 9, 4, 5, 8]
console.log(uniqueNames)//Output ["Manish", "Aditya", "Ram", "Rajesh"]

export default class spreadOperator extends Component {
    render() {
        return (
            <div>
                <h1>Spread Operator</h1>
                  <p>Open console for data</p>
            </div>
        )
    }
}
