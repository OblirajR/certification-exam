function signup(e){
    // e.preventDefault()

    var username = document.getElementById("username").value 
    var password = document.getElementById("password").value
    console.log("hi")
    if(username == password){
        alert("Login Succesful")
        window.location.assign("orders.html")
    }
    else{
        alert("Wrong login details")
    }

    localStorage.setItem("user",username)
    localStorage.setItem("pass",password)
    // var user = {
    //     username: username,
    //     password: password,
    // };

    // var json = JSON.stringify(user)
    // localStorage.setItem(username, json)
    // console.log("user added")
}

// let val = document.getElementById("login-value")

// if(localStorage.getItem(username) == localStorage.getItem(password)){
//     val.href = "./orders.html"
// }

document.getElementById("form").addEventListener("click",function(event){
    event.preventDefault()
})
