class User{
    constructor(username){
        this.username = username;
    }

    loggMe(){
        console.log(`Username is ${this.username} `);
        
    }
}

class Teacher extends User{
    constructor(username, email, password){
        super(username)
        this.email = email;
        this.password = password
    }
    addCourse(){
        console.log(`A new course was added by ${this.username}`);
        
    }
}

const chai = new Teacher("chai","chai@google.com","85694")
console.log(chai.loggMe());

const masalaChai = new User("tadakaChai")
console.log(masalaChai.loggMe());

console.log(chai instanceof User);
