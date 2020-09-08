import React, { Component } from 'react'
import axios from 'axios'

//Example 1 
let mypromise = new Promise(function(resolve, reject) { 
   let name = 'Manish'
   if(name === 'Manish'){
        resolve();
   }
   else{
    reject()
   }
  });   

mypromise.then(function () { 
      console.log('Yes my name is Manish'); 
  }).catch(function () { 
      console.log('Sorry I am not Manish'); 
  });

//Output Yes my name is Manish

//Here in this case if name condition is satisfied it will console (Yes my name is Manish) and if it doesn't satify or there is any error it will log (Sorry I am not Manish)


// then() Resolve Example
let thenPromiseResolve = new Promise(function(resolve, reject) { 
    let site = 'Medium'
    if(site === 'Medium'){
         resolve();
    }
    else{
     reject()
    }
   }); 

thenPromiseResolve.then(function(){
    console.log("Yes the site is medium")
}, function(){
    console.log('This site is not medium')
})

//Output Yes the site is medium

//then() Reject Example
let thenPromiseReject = new Promise(function(resolve, reject) { 
    let site = 'Medium'
    if(site === 'Facebook'){
         resolve();
    }
    else{
     reject()
    }
   }); 

thenPromiseReject.then(function(){
    console.log("Yes the site is medium")
}, function(){
    console.log('This site is not medium')
})

// Output This site is not medium

// catch Example
let catchPromise = new Promise(function(resolve, reject){
    let position = "Labour"
    if(position === "Developer"){
        resolve()
    }
    else{
        reject()
    }
})

catchPromise.then(function(){
    console.log('I am developer')
}).catch(function(){
    console.log('You are labour')
})
//Output You are labour


// finally Example
let finallyPromise = new Promise(function(resolve, reject){
    let publication = "How to react"
    if(publication === "How to react"){
        resolve()
    }
    else{
        reject()
    }
})

finallyPromise.then(function(){
    console.log('Resolve')
}).catch(function(){
    console.log('Reject')
}).finally(function(){
    console.log('Finally')
})
//Output Finally

//Chaining in Promise Example

let chainingPromise = new Promise(function(resolve, reject){
    let a = 10

    if(a === 10){
        resolve(a)
    }
    else{
        reject('Error')
    }
})

chainingPromise.then(function(res){
    console.log(res)
    return res * 2 
}).then(function(res){
    console.log(res)
    return res * 2
}).then(function(res){
    console.log(res)
}).catch(function(err){
    console.log(err)
})
//Output 10 20 40

let chainingAfterCatch = new Promise(function(resolve, reject){
    let a = 100
    if(a === 100){
        resolve(a)
    }else{
        reject('Error')
    }
})

chainingAfterCatch.then(function(res){
    console.log(res)
    return res * 2
}).then(function(res){
    console.log(res)
    return res * 2
}).catch(function(res){
    console.log(res)
    return res
}).then(function(res){
    console.log(res)
    return res * 2
})

//Output 100 200 400


export default class promise extends Component {
    getData(){
        let fetchingData = new Promise(function(resolve, reject){
            let res = axios.get('http://jsonplaceholder.typicode.com/users')
            if(res){
                resolve(res)
            }else{
                reject(res)
            }
        })
        
        fetchingData.then(function(res){
            console.log(res)
        }).catch(function(res){
            console.log(res)
        })
    }

    componentDidMount(){
        this.getData()
    }
    render() {
        return (
            <div>
                 <h1>Promise</h1>
                  <p>Open console for data</p>
            </div>
        )
    }
}
