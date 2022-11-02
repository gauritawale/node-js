//Async method cannot waiting for next output...


//Example :1(simple):

setTimeout(() => {
    console.log("Hii!!!")
}, 2000);
console.log("Gauri")

//output:
//PS C:\Users\gauri\OneDrive\Desktop\node-js> node async.js
//Gauri
//Hii!!!



//Example :1(Using function):

async function fetchExample () {
    console.log ('fetchExample')
}

async function fetchpaymentDetails () {
    console.log ('fetchpaymentdetails')
}

fetchpaymentDetails()
fetchExample()

//output:
////PS C:\Users\gauri\OneDrive\Desktop\node-js> node async.js
//fetchpaymentdetails
//fetchExample