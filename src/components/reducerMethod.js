import React, { Component } from 'react'

//Basic Example
let numbers = [10, 15, 20, 25, 30]
let reduceNumber = numbers.reduce((accumulate, value) => accumulate + value)

console.log(reduceNumber)//Output 100

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

let totalAge = user.reduce((accumulate, value) => accumulate + value.age , 0)

console.log(totalAge) //Output 104


export default class reduceMethod extends Component {
    render() {
        return (
            <div>
                 <h1>Reduce</h1>
                  <p>Open console for data</p> 
            </div>
        )
    }
}
