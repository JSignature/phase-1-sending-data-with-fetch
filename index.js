// Add your code here
// const configurationObject = {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//       Accept: "application/json",
//     },
//     body: JSON.stringify(data),
//   };

const submitData = (userName, userEmail) => {
    const data = {
        name : userName,
        email : userEmail
    }
    
    return fetch("http://localhost:3000/users", {
    method: "POST",
    headers: {
        "Content-Type": "application/json",
         "Accept": "application/json",
    },
    body: JSON.stringify(data)
})
    .then(resp => resp.json())
    .then(object => {
        const element = document.createElement("h1")
        element.textContent = object.id
        document.querySelector("body").appendChild(element)

    

    })

}
submitData("Jimmy", "someemail@gmail.com")