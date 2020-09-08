//Example 1 Import
import {name, AGE, Job, Coding} from './exportStatement'

//Example 2 Import
import {hobby, COUNTRY, Working, Position} from './exportStatement'

//Example 3 Import
import {Doing} from './exportStatement'

//Example 4 Import
import defaultClassStatement from './exportStatement'

//Example 5 Import
import * as all from './exportStatement'

import React, { Component } from 'react'

 // Example 1 Export
 console.log(name)
 console.log(AGE)
 console.log(Job)
 console.log(Coding('coding'))


 console.log('////////////////////////////')

 //Example 2 Export
 console.log(hobby)
 console.log(COUNTRY)
 console.log(Working)
 console.log(Position('developer'))


 console.log('////////////////////////////')

 //Example 3 Export
 console.log(Doing('writing'))


 console.log('////////////////////////////')


 //Example 4 Export

console.log(defaultClassStatement)

console.log('////////////////////////////')

// Example 5 Import
console.log(all)

export default class importStatement extends Component {
    render() {
      
        return (
            <div>
                
            </div>
        )
    }
}
