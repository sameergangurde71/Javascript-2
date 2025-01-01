class User{
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`Username:${this.username}`);
        
    }
    static createId(){
        return Math.round(Math.random() * 10);
    } //static use karna se woh method access nhi karne deti
}

const hitesh = new User("hitesh")
// console.log(hitesh.createId());


class Teacher extends User{
    constructor(username, email){
        super(username)
        this.email = email
    }
}

const iphone = new Teacher("sameer","chai@gamil.com")
console.log(iphone.logMe());

console.log(iphone.createId());//can not access due to static keyword
