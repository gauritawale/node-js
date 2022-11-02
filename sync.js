//sync method can waiting for next output,Like one after another..

        //Example :1(simple)
console.log("person 1")
console.log("person 2")
console.log("person 3")
console.log("person 4")
console.log("person 5")

//output:
//PS C:\Users\gauri\OneDrive\Desktop\node-js> node synce.js
//person 1
//person 2
//person 3
//person 4
//person 5

     

       //Example:2(Using function)

function fun1 () {
    console.log ('function 1')
}

function fun2 () {
    console.log ('function 2')
}

fun1()
fun2()


//output:
//PS C:\Users\gauri\OneDrive\Desktop\node-js> node synce.js
//function 1
//function 2