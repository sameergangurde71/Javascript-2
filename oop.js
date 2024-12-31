const user = {
    username : "Sameer",
    loginCount: 10,
    isSignIn: true,

    getUserdetails : function(){
        // console.log(this.username);
        console.log(this);
        
        
    }
}
// console.log(user.username);
//console.log(user.getUserdetails());
// console.log(this);//{}

function User(username, loginCount, isLoggedin){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedin = isLoggedin;

    this.gretting = function(){
        console.log(`Welcome ,${this.username}`);
        
    }

     return this
}

const userOne = new User("Sameer",5,true);
const userTwo = new User("Hitesh",4,false);
console.log(userOne.constructor);
// console.log(userTwo);


