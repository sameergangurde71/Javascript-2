<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Closure aur chai</title>
</head>
<body style="background-color: #212121;">
    <button id="orange">Orange</button>
    <button id="green">Green</button>
</body>
<script>
    // LEXICAL SCOPING concept

    // function init() {
    //     let name = "Mozilla"; 
    //     function displayName() {    
    //         console.log(name); 
    //     }
    //     displayName();
    // }
    // init();

    // function Outer(){
    //     let username = "sameer"

    //     function inner(){
    //         let secret = "my123"
    //         console.log("inner",username);
            
    //     }
    //     function innerTwo(){
           
    //         console.log("innerTwo",username);
    //         console.log("secret is",secret); //can not defined because it is out of the function
    //         //and call outside of function
            
    //     }
    //     inner()
    //     innerTwo()
    // }
   
    // Outer()
    // console.log("Too Outer",username);
    //from above concept we learn that at inner function can access property of outer function
    //if it is declared in function if it is declared at outside of function then it can't access
    //is known as lexical scoping


    // CLOSURE concept
        //{isme outer function call karte samay pura lexical scoping memory mein store hota he executional
        //context ke sathh esliye return kar skte hai}
    function makeFunc() {
        const name = "Mozilla";
        function displayName() {
            console.log(name);
        }
        return displayName;
    }

    const myFunc = makeFunc();
    myFunc();


</script>
    
<script>
    //  document.getElementById('orange').onclick = function()
    //  {
    //     document.body.style.backgroundColor = "orange"
    //  }
    //  document.getElementById('green').onclick = function()
    //  {
    //     document.body.style.backgroundColor = "green"
    //  }

    //Requirement (mujhe 500 button do aur uspe click hone pe uska color aa jaye)


    //we use closure
    function clickHandler(color){
        // document.body.style.background = `${color}`

        function change(){
            document.body.style.background = `${color}`
        }
        return change;

    }
    document.getElementById('orange').onclick = clickHandler("orange")
    document.getElementById('green').onclick = clickHandler("green")
</script>
</html>
