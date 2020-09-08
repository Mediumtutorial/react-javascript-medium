import React, { Component } from 'react'

export default class templateLiterals extends Component {
  



    render() {
          //Example 1
        console.log(`I am a Template literals string`)

        //Example 2  - Multi-line string
        console.log(`Line 1
Line 2`)

        //Example 3 - Interpolation
        var a = 5
        var b = 2
        console.log(`Five multiplied by two is equal to ${a*b}`)
        return (
            <div>
                 <h1>Template Literals</h1>
                  <p>Open console for data</p> 
            </div>
        )
    }
}
