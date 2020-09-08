
//Example 1

export let name = ['Manish', 'Manu', 'Manntrix'];

export const AGE = 27;

export class Job {
    constructor(profile){
        this.profile = profile
    }
   
}

export const Coding = d => {
    return `I do ${d}`
}

//Example 2

let hobby = ['Music', "Programming", "Writing"]

let COUNTRY = 'India'

class Working{
    constructor(dev){
        this.dev = dev
    }
}

const Position = p =>{
    return `Software ${p}`;
}

export {hobby, COUNTRY, Working, Position}

//Example 3
const Do = c => {
    return `Currently ${c} article`
}

export {Do as Doing}

//Example 4

export default class defaultClassStatement{
    constructor(dev){
        this.dev = dev
    }
}
