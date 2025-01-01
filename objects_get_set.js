 //object based getter setter method used in past

 const User = {
    _email : "h@hc.com",
    _password: "abc",


    get email(){
        return this._email.toUpperCase();
    },

    set email(value){
        this._email = value
    },
    get password(){
        return this._password.toUpperCase();
    },

    set password(value){
        this._password = value
    }
 }
 const hitesh =  Object.create(User)
console.log(hitesh.email);
console.log(hitesh.password);
