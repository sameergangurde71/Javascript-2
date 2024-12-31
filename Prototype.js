// let myName = "hitesh   "
// let mychannel = "chai   "
// console.log(myName.truelength); // smjenge kaise method banate he library mein

let string2 = "SamBhau"
let myHeros = ["thor","spiderman"]

let heroPower = {
    thor:"hammer",
    spiderman:"sling",

    getSpiderPower: function(){
        console.log(`Spidy power is ${this.spiderman}`);
        
    }
}

Object.prototype.hitesh = function(){
    console.log(`hitesh is present in all objects`);
    
}//inject hitesh function/method directly into object prototype so array,function,string can acccess

// heroPower.hitesh();
// myHeros.hitesh();//array
// string2.hitesh();//string

//ab hum directly array mein inject karenge

Array.prototype.heyHitesh = function(){
    console.log(`Hitesh says hello`);
    
}

//myHeros.heyHitesh()//give access for only arrays
// heroPower.heyHitesh()//not give access for others


// inheritance

const User = {
    name: "username"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable:false
}

const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__: TeachingSupport
}

Teacher.__proto__ = User

//modern syntax
 Object.setPrototypeOf(TeachingSupport, Teacher)

 let anotherUsername = "ChaiAurCode    "

 String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`True length is: ${this.trim().length}`);
    
    
 }

 anotherUsername.trueLength()
 "sameer".trueLength()
