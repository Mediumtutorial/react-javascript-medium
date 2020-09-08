import React, { Component } from 'react'


//Example 1 (Array)
const arr = ['Medium', 'Article', 'React', 'Javascript']
const [one, two, three, four] = arr

console.log(one) //output Medium
console.log(two) //output Article
console.log(three) //output React
console.log(four) //output Javascript


//Example 2 (Array)
const arr2 = ['Medium', 'Article', 'React', 'Javascript']
const [one2, two2, ...rest2] = arr2

console.log(one2) //output Medium
console.log(two2) //output Article
console.log(rest2) //output ["React", "Javascript"]


//Example 3 (Array)

const arr3 = ['Medium', 'Article']
const [one3 = 'Google', two3 = 'Blog', three3 = 'Next'] = arr3

console.log(one3) //output Medium
console.log(two3) //output Article
console.log(three3) //output Next

//Example 4 (Array)
const arr4 = ['Medium', 'Article', ['React', 'Javascript']]
const [one4, two4, [three4, four4]] = arr4

console.log(one4) //output Medium
console.log(two4) //output Article
console.log(three4) //output React
console.log(four4) //output Javascript

//Example 5 (Array)

let a = 'Medium';
let b = 'React';

[a, b] = [b, a];

console.log(a); //output React
console.log(b); //output Medium


//Example 1 (Object)
const profile = {
    name : 'Manish',
    age: 27,
    profession: 'Developer'
  }
const {name,age,profession} = profile
  
console.log(name) //Output Manish
console.log(age) //Output 27
console.log(profession) //Output Developer


//Example 2 (Object)
const profile2 = {
    name : 'Manish',
    age: 27,
    profession: 'Developer'
  }
const {name: newName, age:newAge, profession: newProfession} = profile2
  
console.log(newName) //Output Manish
console.log(newAge) //Output 27
console.log(newProfession) //Output Developer


// Example 3 (Object)
const profile3 = {
    name3 : 'Manish',
    age3: 27,
  }
const {name3, age3, profession3="Developer"} = profile3
  
console.log(name3) //Output Manish
console.log(age3) //Output 27
console.log(profession3) //Output Developer


// Example 4 (Object)
const profile4 = {
    name4 : 'Manish',
    age4: 27,
  }
const {name4: newName4, age4: newAge4, profession4: newProfession4="Developer"} = profile4
  
console.log(newName4) //Output Manish
console.log(newAge4) //Output 27
console.log(newProfession4) //Output Developer

// Example 5 (Object)
const profile5 = {
    name5 : 'Manish',
    age5: 27,
    profession5: "Developer",
    skills : {
        first: "React",
        second: "Wordpress",
    }
  }
const {name5, age5, profession5, skills: {first,second}  } = profile5
  
console.log(name5) //Output Manish
console.log(age5) //Output 27
console.log(profession5) //Output Developer
console.log(first) //Output React
console.log(second) //Output Wordpress


// Example 6 (Object)
const profile6 = {
    name6 : 'Manish',
    age6: 27,
    profession6: "Developer",
    skills6 : {
        first6: "React",
        second6: "Wordpress",
    }
  }
const {name6, age6, profession6, skills6: {first6,second6, third = "UI Design"}  } = profile6
  
console.log(name6) //Output Manish
console.log(age6) //Output 27
console.log(profession6) //Output Developer
console.log(first6) //Output React
console.log(second6) //Output Wordpress
console.log(third) //Output UI Design


// Example 7 (Object)
const profile7 = {
    name7 : 'Manish',
    age7: 27,
    profession7: "Developer",
    skills7 : {
        first7: "React",
        second7: "Wordpress",
    }
  }
const {name7, age7, ...rest7} = profile7
  
console.log(name7) //Output Manish
console.log(age7) //Output 27
console.log(rest7) //Output {profession7: "Developer", skills7: {first7: "React", second7: "Wordpress"}}


// Mixed Destructuring
const newProfile = {
    userName: 'Manntrix',
    languages : {
        numberOne: 'PHP',
        numberTwo: "Javascript"
    },
    location: {
        country: "India",
        city: "Kolkata",
        longLat: [27.203, 77.501]
    }
}

const {userName, languages: {numberOne, numberTwo}, location:{country,city, longLat: [longitude, latitude]}} = newProfile

console.log(userName) //Output Manntrix
console.log(numberOne) //Output PHP
console.log(numberTwo) //Output Javascript
console.log(country) //Output India
console.log(city) //Output Kolkata
console.log(longitude) //Output 27.203
console.log(latitude) //Output 77.501

export default class Destructuring extends Component {
    render() {
        return (
            <div>
                 <h1>Destructuring</h1>
                  <p>Open console for data</p>
            </div>
        )
    }
}
