import React, { Component } from 'react'
import axios from 'axios'

export default class mapFunction extends Component {
    
    /*Example 1 */
    mapMethod = () => {
        axios.get('https://jsonplaceholder.typicode.com/users').then(res => {
            const data = res.data
            data.map(val => {console.log("Example1 - " + val.name)})
        })
     }

     /* Example 2 */ 

     createObject(){
        axios.get('https://jsonplaceholder.typicode.com/users').then(res => {
            const data = res.data
            var objectData = data.map((val, i) => ({index: i, value: val}))
            console.log(objectData)
        })
     }


     componentDidMount(){
         this.mapMethod() 
         this.createObject()
     }

    render() {
        return (
            <div>
                <h1>Map Function</h1>
                  <p>Open console for data</p>
            </div>
        )
    }
}
