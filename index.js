// Add your code here


const submitData = (userName, userEmail) => {
    const element = document.createElement("h1")
    
    return fetch("http://localhost:3000/users", {
    method: "POST",
    headers: {
        "Content-Type": "application/json",
         "Accept": "application/json",
    },
    body: JSON.stringify({name : userName, email : userEmail})
})
    .then(resp => resp.json())
    .then(object => {
        element.textContent = object.id
        document.querySelector("body").appendChild(element)
    })
    .catch(error => {
        element.textContent = error.message
        document.querySelector("body").appendChild(element)
    })
}
submitData("Jimmy", "someemail@gmail.com")