import React, { Component } from 'react'
import axios from 'axios'

export default class ArrowFunction extends Component {

    /*1. The first or common way to write an arrow function. */
    common = () => {
        console.log('The first or common way to write an arrow function.')
      }

    /*2. Arrow function without curly braces if the return statement is one.*/
    singleReturn = () => console.log('Arrow function without curly braces if the return statement is one.')


    /*3. Arrow function with single parameter and without parenthesis in parameter*/
    singleArgument = val => {console.log(`Arrow function without parenthesis if there is one argument.${val}`)}

    /*4. Arrow function if there is no argument */
    noArgument = _ => {
        console.log('Arrow function if there is no argument')
    }
   
     /*5. Arrow function with Object Literal */
    objectLiteral = (age, name) => ({age: age, name:name})

    /*6. Arrow  function use case in map */
    useWithMap = () => {
       axios.get('https://jsonplaceholder.typicode.com/users').then(res => {
           const data = res.data
           data.map(d => {console.log(d.name)})
       })
    }
    /*7. Async await arrow function */
    asyncAwaitFunction = async () => {
        const res = await axios.get('https://jsonplaceholder.typicode.com/users')
        console.log(res.data)
    }
    
      componentDidMount(){
          this.common()
          this.singleReturn()
          this.singleArgument('-- passing the value')
          this.noArgument()
          console.log(this.objectLiteral(27, 'Manish'))
          this.useWithMap()
          this.asyncAwaitFunction()
      }
    render() {
        return (
            <div style={{textAlign: "center"}}>
                  <h1>Arrow Function</h1>
                  <p>Open console for data</p>
                 <FunctionalComponent />
            </div>
        )
    }
}


/*8. Arrow function usage in functional components. */ 
const FunctionalComponent = () => {
    return <h1>This is a stateless functional component in react</h1>
}