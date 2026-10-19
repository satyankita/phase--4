// let arr = [1, 2, 3, 4, 5]

// let copyArr = [...arr]
// console.log(copyArr)


// fetch('https://jsonplaceholder.typicode.com/todos/1')
//       .then(response => response.json())
//       .then(json => console.log(json))

let body = document.body;

let btn = document.createElement("button");
btn.innerText = "Get";
btn.style.cssText = "padding: 20px;"
body.appendChild(btn);


let para = document.createElement("p");
body.appendChild(para);


btn.addEventListener("click", async() => {
   try {let res = await fetch('https://jsonplaceholder.typicode.com/todos/1')
    let data = await res.json();
    para.innerText = data.title;
} catch (err) {
    console.log(err)
    para.innerText = ("Somthing went wrong", err)
};

})
