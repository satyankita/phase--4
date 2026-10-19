
let a = 1;
let b = 2;
let c = 3;

function sum(...numbers) {
    return numbers.reduce((prev, curr) => prev + curr, 0);
}

console.log(sum(a, b, c)); 



let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];

let combined = [...arr1, ...arr2];
console.log(combined);



let [x, y, z] = arr1;
console.log(x, y, z);

let [p, q, r] = arr2;
console.log(p, q, r);


// https://fakestoreapi.com/products
// let dummyData = {
//   "id": 0,
//   "title": "Shirt",
//   "price": 100,
//   "description": "This is a formal shirt",
//   "category": "Clothing",
//   "image": "http://example.com"
// }
// Create a function to  Post this data and console the response.

async function postUserData() {
    try {
        const userdata = await fetch("https://fakestoreapi.com/products", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                title: "Shirt",
                price: 100,
                description: "This is a formal shirt",
                category: "Clothing",
                image: "http://example.com"
            })
        });

         data = await userdata.json();
        console.log(data);
    } catch (error) {
        console.error("Error:", error);
    }
}

postUserData();     



// check if @ exists in your email
function validateEmail(email) {
    if (email.includes("@")) {
        console.log("Valid email");
    } else {
        console.log("Invalid email");
    }
}