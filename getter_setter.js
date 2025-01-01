 class User{
    constructor(username, password){
        this.username = username;
        this.password = password;
    }

    get username(){
        return `Hii ${this._username.toUpperCase()}`
    }
    set username(value){
        this._username = value;
    }

    get password(){
        return `${this._password}sameer`
    }

    set password(value){
        this._password = value
    }
 }

 const hitesh = new User("Sameer","abc");
 console.log(hitesh.password);
 console.log(hitesh.username);
 
