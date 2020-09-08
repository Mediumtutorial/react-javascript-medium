import React, { Component } from 'react'

 //Single condition checking
 let name = 'Manish'
 let user = name === "Manish" ? 'Yes my name is manish' : "Sorry my name is not manish"

 console.log(user)//Output Yes my name is manish


 // Multiple condition checking
 let userName = "Manntrix"
 let age = 27

 let profile = userName === "Unknown" ? "My username is Manntrix" : age === 27 ? "My age is 27" : "I am very young"

 console.log(profile)//Ouput My age is 27



export default class ternaryOperator extends Component {
    render() {

        return (
            <div>
                 <h1>Ternary Operator</h1>
                  <p>Open console for data</p> 
            </div>
        )
    }
}
