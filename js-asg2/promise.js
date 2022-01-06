async function getData(uId) {
    let promise = new Promise((resolve, reject) => {
        setTimeout(() => {
        console.log("Fetched the data!");
        resolve("skc@gmail.com");
        }, 4000);
    });
    let result = await promise;
    return result;
}
    
console.log("start");
var email=getData("skc").then((email)=>{console.log("Email id of the user id is: " + email);console.log("end");});



