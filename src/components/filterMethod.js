import React, { Component } from 'react'

//Basic Example 
let salary = [10000, 14000, 20000, 18000, 12000, 50000, 42000, 35000]
let filteredSalary = salary.filter(element =>  element >= 20000 )

console.log(filteredSalary)//Output [20000, 50000, 42000, 35000]

let name = ['Manish', "Mahesh", "Aditya"]
let filteredName = name.filter(element => element === 'Manish')

console.log(filteredName)//Output ['Manish']

//Example with some dummy data
let user = [
    {
        id: 1,
        userName: "Manntrix",
        age : 27
    },
    {
        id : 2,
        userName : "JohnCena",
        age: 25

    },
    {
        id : 3,
        userName: "Argon",
        age: 22
    },
    {
        id : 4,
        userName: "pikachu",
        age: 30
    },

]

let filteredUserId = user.filter(element => element.id === 2)
console.log(filteredUserId)// [{id: 2, userName: "JohnCena", age: 25}]

let filtereduserName = user.filter(element => element.userName === 'Argon')
console.log(filtereduserName)// [{id: 3, userName: "Argon", age: 22}]

let filteredUserAge = user.filter(element => element.age > 25)
console.log(filteredUserAge) //Output[{id: 1, userName: "Manntrix", age: 27}, {id: 4, userName: "pikachu", age: 30}]

export default class filterMethod extends Component {
    render() {
        return (
            <div>
                 <h1>Filter</h1>
                  <p>Open console for data</p> 
            </div>
        )
    }
}
